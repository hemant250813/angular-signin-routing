import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {
  destinations = [
    {
      name: 'Thailand',
      image: 'https://img.freepik.com/free-photo/landmark-pagoda-doi-inthanon-national-park-chiang-mai-thailand_335224-779.jpg?w=2000'
    },
    {
      name: 'Singapore',
      image: 'https://images.hindustantimes.com/img/2022/09/16/550x309/joshua-ang-Gf_KqXHU-PY-unsplash_1634730822569_1663337158892_1663337158892.jpg'
    },
    {
      name: 'Las Vegas',
      image : 'https://cdn.getyourguide.com/img/location/5ffeb49109bf0.jpeg/75.jpg'
    },
    {
      name: 'France',
      image : 'https://wallpaperset.com/w/full/8/a/c/24870.jpg'
    }
    // Add more destinations as needed
  ];
}
