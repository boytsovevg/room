import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'chosen-game',
    templateUrl: './chosen-game.component.html',
    styleUrls: ['./chosen-game.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChosenGameComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
