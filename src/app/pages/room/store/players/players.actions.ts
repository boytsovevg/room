import { createAction, props } from '@ngrx/store';

import { PlayerPreviewDto } from '../../dto/player-preview.dto';
import { PlayerDto } from '../../dto/player.dto';

export const loadPlayersAction = createAction(
    '[players] loadPlayersAction'
);

export const loadPlayersSuccessAction = createAction(
    '[players] loadPlayersSuccessAction',
    props<{players: PlayerDto[]}>()
);

export const searchPlayersAction = createAction(
    '[players] searchPlayersAction',
    props<{ searchText: string }>()
);

export const searchPlayersSuccessAction = createAction(
    '[players] searchPlayersSuccessAction',
    props<{ players: PlayerPreviewDto[] }>()
);
