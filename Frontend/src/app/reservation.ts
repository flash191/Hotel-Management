export class Reservation {
  id: number;
  users: User | null;
  room: Room | null;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  totalPrice: number;

  constructor(
    id: number,
    users: User | null,
    room: Room | null,
    checkInDate: Date | null,
    checkOutDate: Date | null,
    totalPrice: number
  ) {
    this.id = id;
    this.users = users;
    this.room = room;
    this.checkInDate = checkInDate;
    this.checkOutDate = checkOutDate;
    this.totalPrice = totalPrice;
  }
}
  
  export class User {
    id: number;
    username: string;
    email: string;
  
    constructor(id: number, username: string, email: string) {
      this.id = id;
      this.username = username;
      this.email = email;
    }
  }
  
  export class Room {
    id: number;
    roomNumber: number;
    roomType: string;
    price: number;
    available: boolean;
  
    constructor(
      id: number,
      roomNumber: number,
      roomType: string,
      price: number,
      available: boolean
    ) {
      this.id = id;
      this.roomNumber = roomNumber;
      this.roomType = roomType;
      this.price = price;
      this.available = available;
    }
  }
  