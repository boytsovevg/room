import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { GamesModule } from './games/games.module';
import { PlayersModule } from './players/players.module';
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
        MatButtonModule,
        PlayersModule,
        GamesModule
    ],
    declarations: [
        RoomComponent,
    ],
    exports: [
        RoomComponent
    ]
})
export class RoomModule {
}
