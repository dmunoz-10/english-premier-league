import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFiveEventsComponent } from './last-five-events.component';

describe('LastFiveEventsComponent', () => {
  let component: LastFiveEventsComponent;
  let fixture: ComponentFixture<LastFiveEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastFiveEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastFiveEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
