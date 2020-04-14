import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerModel } from './model/player.model';

@Component({
    selector: 'steam-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent implements OnInit {

    @Input() players: PlayerModel[];
    @Output() playerDelete = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    public deletePlayer(id: string): void {
        this.playerDelete.emit(id);
    }
}
