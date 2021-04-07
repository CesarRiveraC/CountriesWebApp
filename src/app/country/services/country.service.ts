import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiBaseUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  searchCountry(country: string): Observable<any> {
      
    const apiUrl = `${this.apiBaseUrl}/name/${country}`;

    return this.http.get(apiUrl);
  }
}
