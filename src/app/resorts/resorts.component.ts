import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent implements OnInit {

  @Input()
  private hotels: hotel[];

  @Output()
  private onSelected: EventEmitter<hotel> = new EventEmitter<hotel>();

  private countries: Set<string>;
  private selectedHotels: hotel[];
  private selectedHotel: hotel;

  public ngOnInit(): void {
    this.countries = new Set<string>(this.hotels.map((h: hotel) => h.Country));
    this.countryChanged(null, this.countries.values().next().value);
    this.hotelChanged(null, this.selectedHotels[0]);
  }

  private countryChanged($event: any, country: string): void {
    if ($event) {
      event.preventDefault();
    }

    this.selectedHotels = this.hotels.filter((h: hotel) => h.Country === country);
  }

  private hotelChanged($event: any, hotel: hotel): void {
    if ($event) {
      event.preventDefault();
    }

    this.selectedHotel = hotel;
    this.onSelected.emit(hotel);
  }
}
