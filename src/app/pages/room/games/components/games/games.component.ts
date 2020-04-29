import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { GameModel } from '../../models/game.model';

@Component({
    selector: 'steam-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesComponent {
    @Input() public games: GameModel[];
    @Output() public gameSelect = new EventEmitter<string>();

    public readonly temporaryIcon = 'https://via.placeholder.com/70';

    public handleSelectGame(id: string): void {
        this.gameSelect.emit(id);
    }
}
