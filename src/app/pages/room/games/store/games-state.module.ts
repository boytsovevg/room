import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GamesEffects } from './games.effects';
import { gamesReducer } from './games.reducer';

export const gamesFeatureName = 'games';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(gamesFeatureName, gamesReducer),
        EffectsModule.forFeature([
            GamesEffects
        ])
    ]
})
export class GamesStateModule {
}
