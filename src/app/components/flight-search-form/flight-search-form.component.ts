import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CITIES } from '../../shared/constants';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.scss']
})
export class FlightSearchFormComponent implements OnInit {

  flightForm: FormGroup;
  oneWay: boolean = true;
  cities: any;
  passengers: Array<number> = [1, 2, 3, 4, 5, 6];

  @Output() onFlightSearch = new EventEmitter()

  constructor(
    private fb: FormBuilder,
    private apiService: APIService
  ) { }

  ngOnInit() {
    this.apiService.getCities().subscribe((data) => {
      if (data) this.cities = Object.keys(data["cities"])
    })
    this.flightForm = this.fb.group({
      originCity: new FormControl('', Validators.required),
      destinationCity: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl(''),
      Passengers: new FormControl('', Validators.required),
    })
  }

  searchFlights() {
    if(this.flightForm.invalid) return;
    let flightDetails = {...this.flightForm.value};
    flightDetails["oneWay"] = this.oneWay;
    this.onFlightSearch.emit(flightDetails);
  }

}
