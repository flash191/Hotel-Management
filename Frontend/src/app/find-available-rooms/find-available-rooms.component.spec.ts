import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAvailableRoomsComponent } from './find-available-rooms.component';

describe('FindAvailableRoomsComponent', () => {
  let component: FindAvailableRoomsComponent;
  let fixture: ComponentFixture<FindAvailableRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindAvailableRoomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindAvailableRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
