import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiBaseUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  searchCountry(country: string): Observable<Country[]> {

    const apiUrl = `${this.apiBaseUrl}/name/${country}`;
    return this.http.get<Country[]>(apiUrl);
  }

  searchCapital(capital: string): Observable<Country[]> {
      
    const apiUrl = `${this.apiBaseUrl}/capital/${capital}`;
    return this.http.get<Country[]>(apiUrl);
  }

  getCountryByCode(code: string): Observable<Country> {

    const apiUrl = `${this.apiBaseUrl}/alpha/${code}`;
    return this.http.get<Country>(apiUrl);
  }
}
