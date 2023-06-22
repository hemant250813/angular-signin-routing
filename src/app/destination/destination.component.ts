import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {
  destinations = [
    {
      name: 'Destination 1',
      image: 'assets/destination1.jpg'
    },
    {
      name: 'Destination 2',
      image: 'assets/destination2.jpg'
    },
    // Add more destinations as needed
  ];
}
