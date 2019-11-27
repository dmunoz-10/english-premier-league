import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-next-five-events',
  templateUrl: './next-five-events.component.html',
  styleUrls: ['./next-five-events.component.css']
})
export class NextFiveEventsComponent implements OnInit {

  name: string;
  events: any;

  constructor(private teamsService: TeamsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('id').replace('_', ' ');
    let team;
    this.teamsService.getTeamDetails(this.name).subscribe(
      res => {
        team = res;
        this.teamsService.getNextFiveEvents(team.teams[0].idTeam).subscribe(
          res => {
            this.events = res;
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  }

}
