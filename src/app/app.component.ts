import { Component, OnInit } from '@angular/core';
import { HOTELS } from './hotel.examples';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private countries: Set<string> = new Set<string>(HOTELS.map((h: hotel) => h.Country));
  private places: hotel[] = [];

  public ngOnInit(): void {
  }

  private onCountrySelected(country: string): void {
    console.log('City: ' + country);
  }
}
