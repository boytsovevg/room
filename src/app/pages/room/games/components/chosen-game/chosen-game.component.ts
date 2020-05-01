import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { GameModel } from '../../models/game.model';

@Component({
    selector: 'chosen-game',
    templateUrl: './chosen-game.component.html',
    styleUrls: ['./chosen-game.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChosenGameComponent {
    @Input() public game: GameModel;

    public readonly temporaryIcon = 'https://via.placeholder.com/100';
}
