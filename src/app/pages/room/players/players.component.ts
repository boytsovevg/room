import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { PlayerPreviewModel } from './models/player-preview.model';
import { PlayerModel } from './models/player.model';

@Component({
    selector: 'steam-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent implements OnDestroy {

    @Input() public players: PlayerModel[];
    @Input() public searchedPlayers: PlayerPreviewModel[];

    @Output() public playerSearchTextChange = new EventEmitter<string>();
    @Output() public searchedPlayerSelect = new EventEmitter<PlayerPreviewModel>();

    @Output() public playerDelete = new EventEmitter<string>();

    public searchPlayersInput = new FormControl();

    private destroy$ = new Subject<void>();

    constructor() {
        this.searchPlayersInput.valueChanges.pipe(
            filter(term => !!term),
            takeUntil(this.destroy$)
        )
            .subscribe(term => {
                if (typeof term === 'string') {
                    this.playerSearchTextChange.emit(term);
                }
            });
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public deletePlayer(id: string): void {
        this.playerDelete.emit(id);
    }

    public handleSearchedPlayerSelect(event: MatAutocompleteSelectedEvent): void {
        this.searchedPlayerSelect.emit(event.option.value);
        this.searchPlayersInput.setValue(null);
    }
}
