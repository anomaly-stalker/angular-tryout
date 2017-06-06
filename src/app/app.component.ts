import { Component, OnInit } from '@angular/core';
import { HOTELS } from './hotel.examples';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private cities: Set<string> = new Set<string>(HOTELS.map((h: hotel) => h.City));
  private places: hotel[] = [];

  public ngOnInit(): void {
  }

  private onCitySelected(city: string): void {
    console.log('City: ' + city);
  }
}
