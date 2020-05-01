import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesContainerComponent } from './steam-games-container.component';

describe('SteamGamesContainerComponent', () => {
  let component: GamesContainerComponent;
  let fixture: ComponentFixture<GamesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
