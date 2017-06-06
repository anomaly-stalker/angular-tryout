import { Component, OnInit } from '@angular/core';

enum Destination { Bali, Roatan, Paris, Barcelona }

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private destinations: string[];

  public constructor() { }

  public ngOnInit(): void {
    const options: string[] = Object.keys(Destination);
    this.destinations = options.slice(options.length / 2);
  }

  private filterChanged(event: any): void {
    console.log(event);
  }

}
