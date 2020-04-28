import { createReducer, on } from '@ngrx/store';

import { PlayerPreviewDto } from '../../dto/player-preview.dto';
import { PlayerDto } from '../../dto/player.dto';

import { deletePlayerAction, loadPlayersSuccessAction, searchPlayersSuccessAction } from './players.actions';

export interface PlayersState {
    players: PlayerDto[];
    searchedPlayers: PlayerPreviewDto[];
}

const initialState: PlayersState = {
    players: [],
    searchedPlayers: []
};

export const playersReducer = createReducer(
    initialState,
    on(loadPlayersSuccessAction, (state, props) => ({ ...state, players: props.players })),
    on(searchPlayersSuccessAction, (state, props) => ({ ...state, searchedPlayers: props.players })),
    on(deletePlayerAction, (state, props) => ({
        ...state,
        players: state.players.filter(p => p.id !== props.id)
    }))
);
