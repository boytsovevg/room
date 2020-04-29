import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GameModel } from '../../models/game.model';
import { GamesState } from '../../store/games.reducer';
import { selectChosenGame } from '../../store/games.selectors';

@Component({
    selector: 'chosen-game-container',
    templateUrl: './chosen-game-container.component.html',
    styleUrls: ['./chosen-game-container.component.scss']
})
export class ChosenGameContainerComponent {

    public chosenGame$: Observable<GameModel>;

    constructor(
        private readonly store: Store<GamesState>
    ) {
       this.chosenGame$ = this.store.pipe(
           select(selectChosenGame)
       );
    }
}
