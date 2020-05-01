import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PlayersEffects } from './players.effects';
import { playersReducer, PlayersState } from './players.reducer';

export const playersFeatureName = 'players';

@NgModule({
    imports: [
        StoreModule.forFeature<PlayersState>(playersFeatureName, playersReducer),
        EffectsModule.forFeature([
            PlayersEffects
        ])
    ]
})
export class PlayersStateModule {
}
