import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  API_URI = 'https://www.thesportsdb.com/api/v1/json/1';

  ALL_TEAMS       = `${this.API_URI}/search_all_teams.php?l=English%20Premier%20League`;
  EVENT_ID        = `${this.API_URI}/lookupevent.php?id=441613`;
  EVENTS_SEASON   = `${this.API_URI}/eventsseason.php?id=4328&s=1920`;
  EVENTS_NEXT     = `${this.API_URI}/eventsnext.php?id=`;
  EVENTS_LAST     = `${this.API_URI}/eventslast.php?id=`;
  STANDINGS_TABLE = `${this.API_URI}/lookuptable.php?l=4328&s=1920`;
  TEAM_DETAILS    = `${this.API_URI}/searchteams.php?t=`;
  TEAM_PLAYERS    = `${this.API_URI}/lookup_all_players.php?id=`;

  TEAMS = null;

  constructor(private http: HttpClient) { }

  getTeams() {
    if (!this.TEAMS) {
      this.TEAMS = this.http.get(this.ALL_TEAMS);
    }
    return this.TEAMS;
  }

  getTeamDetails(name: string) {
    return this.http.get(`${this.TEAM_DETAILS}${name}`)
  }

  getStandingsTable() {
    return this.http.get(this.STANDINGS_TABLE);
  }

  getTeamPlayers(id: number) {
    return this.http.get(`${this.TEAM_PLAYERS}${id}`);
  }

  getAllEvents() {
    return this.http.get(`${this.EVENTS_SEASON}`);
  }

  getNextFiveEvents(id: number) {
    return this.http.get(`${this.EVENTS_NEXT}${id}`);
  }

  getLastFiveEvents(id: number) {
    return this.http.get(`${this.EVENTS_LAST}${id}`);
  }
}
