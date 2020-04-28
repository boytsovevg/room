import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { playersReducer, PlayersState } from './players.reducer';

export const playersFeatureName = 'players';

@NgModule({
    imports: [
        StoreModule.forFeature<PlayersState>(playersFeatureName, playersReducer)
    ]
})
export class PlayersStateModule {
}
