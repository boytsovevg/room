import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PlayersDataService } from '../players-data.service';
import { PlayerPreviewModel } from '../players/models/player-preview.model';
import { PlayerModel } from '../players/models/player.model';
import { GameModel } from '../games/models/game.model';
import { GamesDataService } from '../games-data.service';

@Component({
    selector: 'steam-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnDestroy {
    public players: PlayerModel[];
    public searchedPlayers: PlayerPreviewModel[];

    public games: GameModel[];
    public chosenGame: GameModel;

    private destroy$ = new Subject<void>();

    constructor(
        private playersDataService: PlayersDataService,
        private gamesDataService: GamesDataService
    ) {
        this.playersDataService.getPlayers().pipe(
            takeUntil(this.destroy$)
        ).subscribe(players => {
            this.players = players;
        });

        this.gamesDataService.getGames().pipe(
            takeUntil(this.destroy$)
        )
            .subscribe(games => {
                this.games = games;
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
                const hasInList = this.players.find(p => p.id === player.id);

                if (hasInList) {
                    return;
                }

                this.players = [
                    ...this.players,
                    searchedPlayer
                ];
            });
    }

    public selectGame(id: string): void {
        this.chosenGame = this.games.find(g => g.id === id);
    }
}
