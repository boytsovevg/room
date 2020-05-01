import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PlayerPreviewModel } from '../../models/player-preview.model';
import { PlayerModel } from '../../models/player.model';
import { deletePlayerAction, loadPlayersAction, searchPlayersAction, searchPlayerSelectAction } from '../../store/players.actions';
import { PlayersState } from '../../store/players.reducer';
import { selectPlayers, selectSearchedPlayers } from '../../store/selectors/players.selectors';

@Component({
    selector: 'steam-players-container',
    templateUrl: './players-container.component.html',
    styleUrls: ['./players-container.component.scss']
})
export class PlayersContainerComponent implements OnInit {

    public players$: Observable<PlayerModel[]>;
    public searchedPlayers$: Observable<PlayerPreviewModel[]>;

    constructor(
        private readonly store: Store<PlayersState>
    ) {
        this.players$ = this.store.pipe(
            select(selectPlayers)
        );

        this.searchedPlayers$ = this.store.pipe(
            select(selectSearchedPlayers)
        );
    }

    public ngOnInit(): void {
        this.store.dispatch(loadPlayersAction());
    }

    public searchPlayers(searchText: string): void {
        this.store.dispatch(searchPlayersAction({ searchText }));
    }

    public deletePlayer(id: string): void {
        this.store.dispatch(deletePlayerAction({ id }));
    }

    public handleSearchPlayerSelect(player: PlayerPreviewModel): void {
        this.store.dispatch(searchPlayerSelectAction({ id: player.id }));
    }
}
