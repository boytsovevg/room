import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GameDto } from '../dto/game.dto';

@Injectable()
export class GamesDataService {

    private static readonly games: GameDto[] = [
        {
            id: '1',
            title: 'Dota 2',
            iconUrl: '',
            genre: 'RPG'
        },
        {
            id: '2',
            title: 'COD WarZone',
            iconUrl: '',
            genre: 'Action'
        },
        {
            id: '3',
            title: 'Terraria',
            iconUrl: '',
            genre: 'RPG'
        }
    ];

    public getGames(): Observable<GameDto[]> {
        return of(
            GamesDataService.games
        );
    }

    public getGameById(id: string): Observable<GameDto> {
        return of(
            GamesDataService.games.find(g => g.id === id)
        );
    }
}
