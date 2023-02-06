import { Component } from '@angular/core';
import { trips } from '../data/trips';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travlr Getaways Admin App is Running';
}
export class TripListingComponent implements OnInit {
  trips: Array<any> = trips;
  constructor() {}
  ngOnInit(): void {}
}