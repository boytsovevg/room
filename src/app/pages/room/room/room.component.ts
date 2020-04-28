import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GamesDataService } from '../games-data.service';
import { GameModel } from '../games/models/game.model';

@Component({
    selector: 'steam-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnDestroy {
    public games: GameModel[];
    public chosenGame: GameModel;

    private destroy$ = new Subject<void>();

    constructor(
        private gamesDataService: GamesDataService
    ) {
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

    public selectGame(id: string): void {
        this.chosenGame = this.games.find(g => g.id === id);
    }
}
