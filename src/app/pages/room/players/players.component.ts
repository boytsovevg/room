import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PlayerPreviewModel } from './models/player-preview.model';
import { PlayerModel } from './models/player.model';
import { PlayersDataService } from './players-data.service';

@Component({
    selector: 'steam-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent implements OnInit {

    public searchedPlayers$: Observable<PlayerPreviewModel[]>;
    public players$: Observable<PlayerModel[]>;

    public searchPlayersInput = new FormControl();

    constructor(
        private playersDataService: PlayersDataService
    ) {
        this.searchedPlayers$ = this.searchPlayersInput.valueChanges.pipe(
            switchMap(searchTerm => this.playersDataService.searchPlayers(searchTerm))
        );

        this.players$ = this.playersDataService.getPlayers();
    }

    public ngOnInit(): void {
    }
}
