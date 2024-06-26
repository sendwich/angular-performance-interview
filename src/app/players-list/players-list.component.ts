import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { PlayerData } from '../model/player-data';
import { FibonacciPipe } from '../pipe/fibonacci.pipe';

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
    FibonacciPipe,
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersListComponent {
  @Input() data: PlayerData[] | null = null;
  @Input() teamName: string | null = null;

  name: string = '';

  @Output() remove = new EventEmitter<PlayerData>();
  @Output() add = new EventEmitter<string>();

  onEnterKeydown() {
    this.addPlayer();
  }

  private addPlayer() {
    this.add.emit(this.name);
    this.name = '';
  }
}
