import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PlayersState } from '../players.reducer';
import { playersFeatureName } from '../players.state';

export const selectPlayersState = createFeatureSelector(playersFeatureName);

export const selectPlayers = createSelector(
    selectPlayersState,
    (state: PlayersState) => state.players
);
