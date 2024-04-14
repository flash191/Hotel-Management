import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCreationComponent } from './reservation-creation.component';

describe('ReservationCreationComponent', () => {
  let component: ReservationCreationComponent;
  let fixture: ComponentFixture<ReservationCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
