import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

  flightDetails: any = {
    totalAmount: 9000,
    startDetails: {
      flightId: "AI202",
      startCode: "PNQ",
      endCode: "DEL",
      departTime: "10.00 AM",
      arriveTime: "12.56 PM"
    },
    endDetails: {
      flightId: "AI201",
      startCode: "DEL",
      endCode: "PNQ",
      departTime: "10.00 AM",
      arriveTime: "12.56 PM"
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
