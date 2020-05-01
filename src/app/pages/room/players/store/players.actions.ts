import { createAction, props } from '@ngrx/store';

import { PlayerPreviewDto } from '../../dto/player-preview.dto';
import { PlayerDto } from '../../dto/player.dto';

export const loadPlayersAction = createAction(
    '[players] loadPlayersAction'
);

export const loadPlayersSuccessAction = createAction(
    '[players] loadPlayersSuccessAction',
    props<{ players: PlayerDto[] }>()
);

export const searchPlayersAction = createAction(
    '[players] searchPlayersAction',
    props<{ searchText: string }>()
);

export const searchPlayersSuccessAction = createAction(
    '[players] searchPlayersSuccessAction',
    props<{ players: PlayerPreviewDto[] }>()
);

export const searchPlayerSelectAction = createAction(
    '[players] searchPlayerSelectAction',
    props<{ id: string }>()
);

export const loadPlayerDetailAction = createAction(
    '[players] loadPlayerDetailAction',
    props<{ id: string }>()
);

export const loadPlayerDetailSuccessAction = createAction(
    '[players] loadPlayerDetailSuccessAction',
    props<{ player: PlayerDto }>()
);

export const deletePlayerAction = createAction(
    '[players] deletePlayerAction',
    props<{ id: string }>()
);
