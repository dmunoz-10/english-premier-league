import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextFiveEventsComponent } from './next-five-events.component';

describe('NextFiveEventsComponent', () => {
  let component: NextFiveEventsComponent;
  let fixture: ComponentFixture<NextFiveEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextFiveEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextFiveEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
