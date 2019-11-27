import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-last-five-events',
  templateUrl: './last-five-events.component.html',
  styleUrls: ['./last-five-events.component.css']
})
export class LastFiveEventsComponent implements OnInit {

  name: string;
  events: any;

  constructor(private teamsService: TeamsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('id').replace('_', ' ');
    let team;
    this.teamsService.getTeamDetails(this.name).subscribe(
      res => {
        team = res;
        this.teamsService.getLastFiveEvents(team.teams[0].idTeam).subscribe(
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
