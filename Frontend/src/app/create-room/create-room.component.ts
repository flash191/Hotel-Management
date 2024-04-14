import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { Router } from '@angular/router'; // Import Router module

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  room: Room = new Room();

  constructor(private roomService: RoomService, private router: Router) {} // Fix spacing between parameters

  ngOnInit(){
    // Any initialization logic can go here if needed
  }

  saveRoom(){
    this.roomService.createRoom(this.room).subscribe( data => {
        console.log('Room created successfully:', data);
        this.goToRoomList(); // Call goToRoomList method after room creation
      },
      error => {
        console.error('Error creating room:', error);
        // Handle error appropriately
      }
    );
  }

  goToRoomList() { // Correct method signature
    this.router.navigate(['/rooms']); // Fix route path
  }

  onSubmit() {
    console.log('Submitting room:', this.room);
    this.saveRoom();
  }
}
