import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';

import { PlayersDataService } from '../players-data.service';

import {
    loadPlayerDetailAction,
    loadPlayerDetailSuccessAction,
    loadPlayersAction,
    loadPlayersSuccessAction,
    searchPlayersAction,
    searchPlayerSelectAction,
    searchPlayersSuccessAction
} from './players.actions';

@Injectable()
export class PlayersEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly playersDataService: PlayersDataService
    ) {
    }

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


    public searchPlayerSelect$ = createEffect(
        () => this.actions$.pipe(
            ofType(searchPlayerSelectAction),
            map(props => loadPlayerDetailAction({ id: props.id }))
        )
    );

    public loadPlayerDetail$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadPlayerDetailAction),
            exhaustMap(props => this.playersDataService.getPlayerDetail(props.id)),
            map(player => loadPlayerDetailSuccessAction({ player }))
        )
    );
}
