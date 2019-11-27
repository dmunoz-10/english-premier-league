import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: any;
  players: any;

  constructor(private teamsService: TeamsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.teamsService.getTeams().subscribe(
      async res => {
        this.team = await res.teams.find((e) => e.strTeam.replace(/ /, '_') == id);
        if(this.team) {
          this.teamsService.getTeamPlayers(this.team.idTeam).subscribe(
            res => {
              this.players = res;
            },
            err => console.log(err)
          )
        }
      },
      err => console.log(err)
    )
  }

  goStandingsTable() {
    this.router.navigate(['/team', this.team.strTeam.replace(/ /, '_'), 'standing']);
  }

  goAllEvents() {
    this.router.navigate(['/team', this.team.strTeam.replace(/ /, '_'), 'all_events']);
  }

  goNextFiveEvents() {
    this.router.navigate(['/team', this.team.strTeam.replace(/ /, '_'), 'next_5_events']);
  }

  goLastFiveEvents() {
    this.router.navigate(['/team', this.team.strTeam.replace(/ /, '_'), 'last_5_events']);
  }

}
