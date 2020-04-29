import { createAction, props } from '@ngrx/store';

import { GameDto } from '../../dto/game.dto';

export const loadGamesAction = createAction(
    '[games] loadGamesAction'
);

export const loadGamesSuccessAction = createAction(
    '[games] loadGamesSuccessAction',
    props<{ games: GameDto[] }>()
);

export const selectGameAction = createAction(
    '[games] selectGameAction',
    props<{ id: string }>()
);

export const setChosenGameAction = createAction(
    '[games] setChosenGameAction',
    props<{ game: GameDto }>()
);
