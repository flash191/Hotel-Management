import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationByIdComponent } from './reservation-by-id.component';

describe('ReservationByIdComponent', () => {
  let component: ReservationByIdComponent;
  let fixture: ComponentFixture<ReservationByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
