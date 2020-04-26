import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PlayersDataService } from '../players-data.service';
import { PlayerPreviewModel } from '../players/models/player-preview.model';
import { PlayerModel } from '../players/models/player.model';

@Component({
    selector: 'steam-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnDestroy {
    public players: PlayerModel[];
    public searchedPlayers: PlayerPreviewModel[];

    private destroy$ = new Subject<void>();

    constructor(
        private playersDataService: PlayersDataService
    ) {
        this.playersDataService.getPlayers().pipe(
            takeUntil(this.destroy$)
        ).subscribe(players => {
            this.players = players;
        });
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public searchPlayers(term: string): void {
        this.playersDataService.searchPlayers(term).pipe(
            takeUntil(this.destroy$)
        )
            .subscribe(players => {
                this.searchedPlayers = players;
            });
    }

    public deletePlayer(id: string): void {
        this.players = this.players.filter(p => p.id !== id);
    }

    public handleSearchPlayerSelect(player: PlayerPreviewModel): void {
        this.playersDataService.getPlayerDetail(player.id).pipe(
            takeUntil(this.destroy$),
        )
            .subscribe(searchedPlayer => {
                this.players = [
                    ...this.players,
                    searchedPlayer
                ];
            });
    }
}
