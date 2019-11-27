import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teams = [];
  favourite_teams = [];

  constructor(private teamsService: TeamsService, private router: Router) { }

  ngOnInit() {
    this.teamsService.getTeams().subscribe(
      res => {
        this.teams = res;
      },
      err => console.log(err)
    );
    if(localStorage.getItem('favourite_teams') != null){
      this.favourite_teams = JSON.parse(localStorage.getItem('favourite_teams'));
    }
  }

  onSelect(team) {
    this.router.navigate(['/team', team.strTeam.replace(/ /, '_')]);
  }

  addToFavourite(team) {
    this.favourite_teams.push(team.idTeam);
    localStorage.setItem('favourite_teams', JSON.stringify(this.favourite_teams));
  }

  removeFromFavourite(team) {
    let temp = [];
    this.favourite_teams.forEach(element => {
      if (element != team.idTeam) temp.push(element);
    });
    this.favourite_teams = temp;
    localStorage.setItem('favourite_teams', JSON.stringify(this.favourite_teams));
  }

  isInFavourite(idTeam) {
    return this.favourite_teams.includes(idTeam);
  }

}
