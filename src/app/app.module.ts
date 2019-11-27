import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamComponent } from './components/team/team.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { TeamsService } from './services/teams.service';
import { StandingsTableComponent } from './components/standings-table/standings-table.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { NextFiveEventsComponent } from './components/next-five-events/next-five-events.component';
import { LastFiveEventsComponent } from './components/last-five-events/last-five-events.component';
import { EventComponent } from './components/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TeamsListComponent,
    TeamComponent,
    PageNotFoundComponent,
    StandingsTableComponent,
    AllEventsComponent,
    NextFiveEventsComponent,
    LastFiveEventsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
