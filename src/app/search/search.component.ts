import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  private places: hotel[];

  @Input()
  private filter: Set<string>;

  @Output()
  private onSelected: EventEmitter<string> = new EventEmitter<string>();

  public constructor() { }

  public ngOnInit(): void {
    this.filterChanged(this.filter.values().next().value);
  }

  private filterChanged(item: string): void {
    this.onSelected.emit(item);
  }
}
