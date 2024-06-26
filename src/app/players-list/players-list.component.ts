import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { fibonacci } from '../util/math';

import { MatDividerModule } from '@angular/material/divider';
import { PlayerData } from '../model/player-data';
@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormField,
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PlayersListComponent implements OnChanges {
  @Input() data: PlayerData[] | null = null;
  @Input() teamName: string | null = null;

  name: string = '';
  membersCount: number = 0;

  @Output() remove = new EventEmitter<PlayerData>();
  @Output() add = new EventEmitter<string>();

  ngOnChanges(): void {
    this.membersCount = this.data?.length ?? 0;
  }

  handleKey(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.add.emit(this.name);
      this.name = '';
    }
  }

  calculate(num: number) {
    return fibonacci(num);
  }
}
