import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenGameContainerComponent } from './chosen-game-container.component';

describe('ChosenGameContainerComponent', () => {
  let component: ChosenGameContainerComponent;
  let fixture: ComponentFixture<ChosenGameContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenGameContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenGameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
