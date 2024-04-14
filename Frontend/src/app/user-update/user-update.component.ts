import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../users';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: Users = { id: 0, username: '', email: '' }; // Initialize user object

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Get the user ID from the route parameters
    const id = this.route.snapshot.params['id'];
    // Fetch user data based on the ID
    this.userService.getUserById(id).subscribe(user => {
      this.user = user;
    });
  }

  updateUser(): void {
    // Call the service method to update the user
    this.userService.updateUser(this.user).subscribe(updatedUser => {
      // Optionally, you can navigate to another page or perform other actions after successful update
      console.log('User updated successfully:', updatedUser);
      this.router.navigate(['/users']); // Navigate back to the user list
    }, error => {
      console.error('Error updating user:', error);
      // Handle error appropriately
    });
  }
}
