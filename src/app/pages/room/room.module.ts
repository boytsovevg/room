import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { ChosenGameComponent } from './chosen-game/chosen-game.component';
import { GamesComponent } from './games/games.component';
import { PlayersDataService } from './players/players-data.service';
import { PlayersComponent } from './players/players.component';
import { RoomComponent } from './room/room.component';
import { MatButtonModule } from '@angular/material/button';

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
        PlayersDataService
    ],
    exports: [
        RoomComponent
    ]
})
export class RoomModule {
}
