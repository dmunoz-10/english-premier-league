import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.css']
})
export class StandingsTableComponent implements OnInit {

  standings: any;
  name: string;
  i: number = 1;

  constructor(private teamsService: TeamsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('id').replace('_', ' ');
    this.teamsService.getStandingsTable().subscribe(
      res => {
        this.standings = res;
      },
      err => console.log(err)
    )
  }

  incrementable() {
    return this.i++;
  }

}
