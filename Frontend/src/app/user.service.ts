import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8081/admin/api/users";

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<Users[]> { 
    return this.httpClient.get<Users[]>(this.baseURL);
  }


  getAllUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.baseURL);
  }

  getUserById(id: number): Observable<Users> {
    return this.httpClient.get<Users>(`${this.baseURL}/${id}`);
  }

  createUser(user: Users): Observable<Users> {
    return this.httpClient.post<Users>(this.baseURL, user);
  }

  updateUser(user: Users): Observable<Users> {
    return this.httpClient.put<Users>(`${this.baseURL}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
  }
}
