import { createFeatureSelector, createSelector } from '@ngrx/store';

import { playersFeatureName } from '../players-state.module';
import { PlayersState } from '../players.reducer';

export const selectPlayersState = createFeatureSelector(playersFeatureName);

export const selectPlayers = createSelector(
    selectPlayersState,
    (state: PlayersState) => state.players
);

export const selectSearchedPlayers = createSelector(
    selectPlayersState,
    (state: PlayersState) => state.searchedPlayers
);
