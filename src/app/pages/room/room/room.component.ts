import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PlayerModel } from '../players/model/player.model';

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

@Component({
    selector: 'steam-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
    public players$ = new BehaviorSubject<PlayerModel[]>(players);

    constructor() {
    }

    ngOnInit(): void {
    }

    public handlePlayerDelete(playerId: string): void {
        const currentPlayers = this.players$.getValue();

        this.players$.next(currentPlayers.filter(p => p.id !== playerId));
    }
}
