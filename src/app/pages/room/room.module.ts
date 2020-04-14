import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';
import { GamesComponent } from './games/games.component';
import { ChosenGameComponent } from './chosen-game/chosen-game.component';
import { PlayersComponent } from './players/players.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RoomComponent,
        GamesComponent,
        ChosenGameComponent,
        PlayersComponent
    ],
    exports: [
        RoomComponent
    ]
})
export class RoomModule {
}
