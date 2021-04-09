import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiBaseUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams(){
    return new HttpParams().set(
        'fields',
        'name;capital;alpha2Code;flag;population'
      );
  }

  constructor(private http: HttpClient) {}

  searchCountry(country: string): Observable<Country[]> {
    const apiUrl = `${this.apiBaseUrl}/name/${country}`;
    return this.http.get<Country[]>(apiUrl, {params:this.httpParams});
  }

  searchCapital(capital: string): Observable<Country[]> {
    const apiUrl = `${this.apiBaseUrl}/capital/${capital}`;
    return this.http.get<Country[]>(apiUrl,{params:this.httpParams});
  }

  getCountryByCode(code: string): Observable<Country> {
    const apiUrl = `${this.apiBaseUrl}/alpha/${code}`;
    return this.http.get<Country>(apiUrl);
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    
    const apiUrl = `${this.apiBaseUrl}/region/${region}`;
    return this.http.get<Country[]>(apiUrl, { params: this.httpParams });
  }
}
