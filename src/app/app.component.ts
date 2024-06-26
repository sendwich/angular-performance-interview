import { Component } from '@angular/core';

import { PLAYERS1, PLAYERS2 } from './data/MOCK_DATA';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerData } from './model/player-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-performance-interview';
  team1: PlayerData[] = [...PLAYERS1];
  team2: PlayerData[] = [...PLAYERS2];

  add(team: PlayerData[], $event: string) {
    return team.unshift({ name: $event, points: 29 });
  }

  remove(team: PlayerData[], $event: PlayerData) {
    return team.splice(team.indexOf($event), 1);
  }
}
