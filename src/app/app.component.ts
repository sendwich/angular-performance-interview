import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';

import { PLAYERS1, PLAYERS2 } from './data/MOCK_DATA';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerData } from './model/player-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-performance-interview';

  team1: WritableSignal<PlayerData[]> = signal([...PLAYERS1]);
  team2: WritableSignal<PlayerData[]> = signal([...PLAYERS2]);

  add(team: WritableSignal<PlayerData[]>, $event: string) {
    team.set([{ name: $event, points: 29 }, ...team()]);
  }

  remove(team: WritableSignal<PlayerData[]>, $event: number) {
    team.set([...team().filter((_,i) => i !== $event)]);
  }
}
