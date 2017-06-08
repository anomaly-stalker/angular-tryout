import { Component, OnInit } from '@angular/core';
import { HOTELS } from './hotel.examples';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private hotels: hotel[] = HOTELS;
  private selectedHotel: hotel;

  public ngOnInit(): void {
  }

  private onCountrySelected(hotel: hotel): void {
    this.selectedHotel = hotel;
  }
}
