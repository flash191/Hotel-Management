import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { FindAvailableRoomsComponent } from './find-available-rooms/find-available-rooms.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { RoomUpdateComponent } from './room-update/room-update.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation-creation/reservation-creation.component';
import { ReservationByIdComponent } from './reservation-by-id/reservation-by-id.component';


const routes: Routes = [
  {path:'rooms', component:RoomListComponent},
  {path:'', redirectTo:'rooms', pathMatch: 'full' },
  {path:'create-room', component:CreateRoomComponent},
  { path: 'update-room/:id', component: RoomUpdateComponent },
  { path: 'available-room', component: FindAvailableRoomsComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/update/:id', component: UserUpdateComponent },
  { path: 'update-room', component: RoomUpdateComponent },
  {path:'reservations', component:ReservationListComponent},
  {path:'create-reservation', component:ReservationFormComponent},
{ path: 'reservations/:userId', component: ReservationByIdComponent },// Add this route
{path:'create-reservation/:id', component:ReservationFormComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
