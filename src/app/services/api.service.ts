import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const flightUrl = `./assets/data/flights.json`;
const citiesUrl = `./assets/data/cities.json`;

@Injectable({
    providedIn: "root"
})
export class APIService {

    constructor(private http: HttpClient) { }

    public getCities() {
        return this.http.get(citiesUrl);
    }

    public getFlights() {
        return this.http.get(flightUrl);
    }
}