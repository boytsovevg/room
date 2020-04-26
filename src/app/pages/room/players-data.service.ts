import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { PlayerPreviewDto } from './dto/player-preview.dto';
import { PlayerDto } from './dto/player.dto';
import { PlayerModel } from './players/models/player.model';

@Injectable()
export class PlayersDataService {

    private static readonly players = [
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

    private static readonly searchedPlayers = [
        {
            id: '11',
            nickname: 'John',
            avatarUrl: 'https://via.placeholder.com/70',
            gamesCount: 30
        },
        {
            id: '12',
            nickname: 'Rob1er3',
            avatarUrl: 'https://via.placeholder.com/70',
            gamesCount: 3
        },
        {
            id: '13',
            nickname: 'KeyPen',
            avatarUrl: 'https://via.placeholder.com/70',
            gamesCount: 15
        },
        {
            id: '14',
            nickname: 'KevinSon',
            avatarUrl: 'https://via.placeholder.com/70',
            gamesCount: 2
        },
        {
            id: '15',
            nickname: 'Liza124',
            avatarUrl: 'https://via.placeholder.com/70',
            gamesCount: 44
        },
    ];

    public getPlayers(): Observable<PlayerDto[]> {
        return of(
            PlayersDataService.players
        ).pipe(
            debounceTime(500)
        );
    }

    public searchPlayers(searchText: string): Observable<PlayerPreviewDto[]> {
        if (!searchText) {
            return of([]);
        }

        return of(
            PlayersDataService.searchedPlayers.filter(p => p.nickname.toLowerCase().includes(searchText.toLowerCase()))
        ).pipe(
            map(
                players => players.map(player => ({
                    id: player.id,
                    nickname: player.nickname
                }))
            )
        );
    }

    public getPlayerDetail(id: string): Observable<PlayerModel> {
        return of(
            PlayersDataService.searchedPlayers.find(p => p.id === id)
        );
    }
}
