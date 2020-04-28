import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';

import { PlayersDataService } from '../../players-data.service';

import { loadPlayersAction, loadPlayersSuccessAction, searchPlayersAction, searchPlayersSuccessAction } from './players.actions';

@Injectable()
export class PlayersEffect {

    constructor(
        private readonly actions$: Actions,
        private readonly playersDataService: PlayersDataService
    ) { }

    public loadPlayers$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadPlayersAction),
            exhaustMap(() => this.playersDataService.getPlayers()),
            map(players => loadPlayersSuccessAction({ players }))
        )
    );

    public searchPlayers$ = createEffect(
        () => this.actions$.pipe(
            ofType(searchPlayersAction),
            exhaustMap(props => this.playersDataService.searchPlayers(props.searchText)),
            map(players => searchPlayersSuccessAction({ players }))
        )
    );

}
