import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ChosenGameComponent } from './components/chosen-game/chosen-game.component';
import { GamesComponent } from './components/games/games.component';
import { ChosenGameContainerComponent } from './containers/chosen-game-container/chosen-game-container.component';
import { GamesContainerComponent } from './containers/games-container/games-container.component';
import { GamesDataService } from './games-data.service';
import { GamesStateModule } from './store/games-state.module';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        GamesStateModule
    ],
    declarations: [
        GamesComponent,
        ChosenGameComponent,
        GamesContainerComponent,
        ChosenGameContainerComponent
    ],
    providers: [
        GamesDataService
    ],
    exports: [
        GamesContainerComponent,
        ChosenGameContainerComponent
    ]
})
export class GamesModule {
}
