export class Room {
    id: number;
    roomNumber: number;
    roomType: string;
    price: number;
    available: boolean;

    constructor() {
        this.id = 0; // Example default value
        this.roomNumber = 0; // Example default value
        this.roomType = "Single"; // Example default value
        this.price = 0; // Example default value
        this.available = false; // Example default value
    }
}
