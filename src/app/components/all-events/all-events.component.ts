import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  all_events = [];
  name: string;

  constructor(private teamsService: TeamsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('id').replace('_', ' ');
    this.teamsService.getAllEvents().subscribe(
      res => {
        this.all_events = this.validateEvents(res);
      },
      err => console.log(err)
    )
  }

  validateEvents(res) {
    let events = [];
    res.events.forEach(element => {
      if (element.strHomeTeam == this.name || element.strAwayTeam == this.name) {
        events.push(element);
      }
    });
    return events;
  }

}
