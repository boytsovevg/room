import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { ChosenGameComponent } from './chosen-game/chosen-game.component';
import { GamesDataService } from './games-data.service';
import { GamesComponent } from './games/games.component';
import { PlayersDataService } from './players-data.service';
import { PlayersComponent } from './players/players.component';
import { RoomComponent } from './room/room.component';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [
        RoomComponent,
        GamesComponent,
        ChosenGameComponent,
        PlayersComponent
    ],
    providers: [
        PlayersDataService,
        GamesDataService
    ],
    exports: [
        RoomComponent
    ]
})
export class RoomModule {
}
