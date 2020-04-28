import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { PlayersComponent } from './components/players/players.component';
import { PlayersContainerComponent } from './containers/players-container/players-container.component';
import { PlayersDataService } from './players-data.service';
import { PlayersStateModule } from './store/players-state.module';

@NgModule({
    imports: [
        CommonModule,
        PlayersStateModule,
        MatListModule,
        MatIconModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatInputModule,
    ],
    declarations: [
        PlayersComponent,
        PlayersContainerComponent
    ],
    providers: [
        PlayersDataService
    ],
    exports: [
        PlayersContainerComponent
    ]
})
export class PlayersModule {}
