import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiBaseUrl: string = 'https://restcountries.com/v2';

  // get httpParams(){
  //   return new HttpParams().set(
  //       'fields',
  //       'name;capital;alpha2Code;alpha3Code;flag;population'
  //     );
  // }

  constructor(private http: HttpClient) {}

  searchCountry(country: string): Observable<Country[]> {
    const apiUrl = `${this.apiBaseUrl}/name/${country}`;
    // return this.http.get<Country[]>(apiUrl, {params:this.httpParams});
    return this.http.get<Country[]>(apiUrl);
  }

  searchCapital(capital: string): Observable<Country[]> {
    const apiUrl = `${this.apiBaseUrl}/capital/${capital}`;
    // return this.http.get<Country[]>(apiUrl,{params:this.httpParams});
    return this.http.get<Country[]>(apiUrl);

  }

  getCountryByCode(code: string): Observable<Country> {
    const apiUrl = `${this.apiBaseUrl}/alpha/${code}`;
    //const apiUrl = `${this.apiBaseUrl}/alpha/CO`;
    return this.http.get<Country>(apiUrl);
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    const apiUrl = `${this.apiBaseUrl}/region/${region}`;
    //return this.http.get<Country[]>(apiUrl, { params: this.httpParams });
    return this.http.get<Country[]>(apiUrl);

  }
}
