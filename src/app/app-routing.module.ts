import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamComponent } from './components/team/team.component';
import { StandingsTableComponent } from './components/standings-table/standings-table.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { NextFiveEventsComponent } from './components/next-five-events/next-five-events.component';
import { LastFiveEventsComponent } from './components/last-five-events/last-five-events.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/teams',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    component: TeamsListComponent
  },
  {
    path: 'team/:id',
    component: TeamComponent
  },
  {
    path: 'team/:id/standing',
    component: StandingsTableComponent
  },
  {
    path: 'team/:id/all_events',
    component: AllEventsComponent
  },
  {
    path: 'team/:id/next_5_events',
    component: NextFiveEventsComponent
  },
  {
    path: 'team/:id/last_5_events',
    component: LastFiveEventsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
