import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';
import { Room } from '../room';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit {
  room: Room = { id: 0, roomNumber: 0, price: 0, available: false, roomType: '' }; // Initialize room object

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    // Get the room ID from the route parameters
    const id = this.route.snapshot.params['id'];
    // Fetch room data based on the ID
    this.roomService.getRoomById(id).subscribe(room => {
      this.room = room;
    });
  }

  updateRoom(): void {
    // Call the room service to update the room
    this.roomService.updateRoom(this.room).subscribe(updatedRoom => {
      // Optionally, you can navigate to another page after the update is successful
      this.router.navigate(['/rooms']);
    }, error => {
      // Handle error if the update fails
      console.error('Error updating room:', error);
    });
  }
}
