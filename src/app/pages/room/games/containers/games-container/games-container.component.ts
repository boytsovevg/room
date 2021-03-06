import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GameModel } from '../../models/game.model';
import { loadGamesAction, selectGameAction } from '../../store/games.actions';
import { GamesState } from '../../store/games.reducer';
import { selectGames } from '../../store/games.selectors';

@Component({
    selector: 'steam-games-container',
    templateUrl: './games-container.component.html',
    styleUrls: ['./games-container.component.scss']
})
export class GamesContainerComponent implements OnInit {

    public games$: Observable<GameModel[]>;

    constructor(
        private readonly store: Store<GamesState>
    ) {
        this.games$ = this.store.pipe(
            select(selectGames)
        );
    }

    public ngOnInit(): void {
        this.store.dispatch(loadGamesAction());
    }

    public selectGame(id: string): void {
        this.store.dispatch(selectGameAction({ id }));
    }
}
