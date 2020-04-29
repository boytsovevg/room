import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenGameComponent } from './chosen-game.component';

describe('ChosenGameComponent', () => {
  let component: ChosenGameComponent;
  let fixture: ComponentFixture<ChosenGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
