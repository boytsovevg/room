import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';

import { GamesDataService } from '../games-data.service';

import { loadGamesAction, loadGamesSuccessAction, selectGameAction, setChosenGameAction } from './games.actions';

@Injectable()
export class GamesEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly gamesDataService: GamesDataService,
    ) {
    }

    public loadGames$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadGamesAction),
            exhaustMap(() => this.gamesDataService.getGames()),
            map(games => loadGamesSuccessAction({ games }))
        )
    );

    public setChosenGame$ = createEffect(
        () => this.actions$.pipe(
            ofType(selectGameAction),
            exhaustMap(props => this.gamesDataService.getGameById(props.id)),
            map(game => setChosenGameAction({ game }))
        )
    );

}
