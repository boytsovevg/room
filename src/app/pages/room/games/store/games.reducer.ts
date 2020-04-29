import { createReducer, on } from '@ngrx/store';

import { GameDto } from '../../dto/game.dto';

import { loadGamesSuccessAction, setChosenGameAction } from './games.actions';

export interface GamesState {
    games: GameDto[];
    chosenGame: GameDto;
}

const initialState: GamesState = {
    games: [],
    chosenGame: null
};

export const gamesReducer = createReducer(
    initialState,
    on(loadGamesSuccessAction, (state, props) => ({ ...state, games: props.games })),
    on(setChosenGameAction, (state, props) => ({ ...state, chosenGame: props.game }))
);
