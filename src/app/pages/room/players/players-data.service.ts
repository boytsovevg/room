import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { PlayerPreviewDto } from './dto/player-preview.dto';
import { PlayerDto } from './dto/player.dto';

@Injectable()
export class PlayersDataService {

    public getPlayers(): Observable<PlayerDto[]> {
        const players = [
            {
                id: '1',
                nickname: 'Nick',
                avatarUrl: 'https://via.placeholder.com/70',
                gamesCount: 30
            },
            {
                id: '2',
                nickname: 'Bob123',
                avatarUrl: 'https://via.placeholder.com/70',
                gamesCount: 30
            },
            {
                id: '3',
                nickname: 'Pen',
                avatarUrl: 'https://via.placeholder.com/70',
                gamesCount: 30
            },
            {
                id: '4',
                nickname: 'Kevin',
                avatarUrl: 'https://via.placeholder.com/70',
                gamesCount: 30
            },
            {
                id: '5',
                nickname: 'Liza',
                avatarUrl: 'https://via.placeholder.com/70',
                gamesCount: 30
            },
        ];

        return of(players).pipe(
            debounceTime(500)
        );
    }

    public searchPlayers(searchText: string): Observable<PlayerPreviewDto[]> {
        if (!searchText) {
            return of([]);
        }

        const players = [
            {
                id: '1',
                nickname: 'Nick',
                avatarUrl: 'https://via.placeholder.com/70',
            },
            {
                id: '2',
                nickname: 'bob123',
                avatarUrl: 'https://via.placeholder.com/70',
            },
            {
                id: '3',
                nickname: 'Pen',
                avatarUrl: 'https://via.placeholder.com/70',
            },
            {
                id: '4',
                nickname: 'Kevin',
                avatarUrl: 'https://via.placeholder.com/70',
            },
            {
                id: '5',
                nickname: 'Liza',
                avatarUrl: 'https://via.placeholder.com/70',
            },
        ];

        return of(
            players.filter(p => p.nickname.toLowerCase().includes(searchText.toLowerCase()))
        ).pipe(
            debounceTime(200)
        );
    }
}
