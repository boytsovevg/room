import { createFeatureSelector, createSelector } from '@ngrx/store';

import { gamesFeatureName } from './games-state.module';
import { GamesState } from './games.reducer';

export const selectGamesState = createFeatureSelector(gamesFeatureName);

export const selectGames = createSelector(
    selectGamesState,
    (state: GamesState) => state.games
);

export const selectChosenGame = createSelector(
    selectGamesState,
    (state: GamesState) => state.chosenGame
);
