import { Component, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  word: string = '';
  existError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(word: string) {
    this.existError = false;
    this.word = word;

    this.countryService.searchCountry(this.word).subscribe(
      (countries) => {
        console.log(countries);
        this.countries = countries;
        
      },
      (err) => {
        this.existError = true;
      }
    );

  }

    suggestions(word:string) {
        this.existError = false;
        //TODO create suggestions.

    }
  
}

