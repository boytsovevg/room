import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'steam-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
