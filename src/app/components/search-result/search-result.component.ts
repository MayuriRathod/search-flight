import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  sidebarClass = 'sidebar';
  flightSearchDetails: any;
  searchResultPresent: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onFlightSearch(event) {
    if(!event) return;
    this.flightSearchDetails = event;
    this.searchFlights();
  }

  searchFlights() {
    
  }

}
