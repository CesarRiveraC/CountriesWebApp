import { Component, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [``],
})
export class ByCountryComponent {
  word: string = '';
  existError: boolean = false;
  countries: Country[] = [];
  seggestedCountries: Country[];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  search(word: string) {
    this.existError = false;
    this.word = word;
    this.showSuggestions = false;

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

  suggestions(word: string) {
    this.existError = false;
    this.word = word;
    this.showSuggestions = true;


    this.countryService.searchCountry(word)
    .subscribe(
        countries => this.seggestedCountries = countries.splice(0, 5),
        (err) => this.seggestedCountries = []
      );
  }

  searchSuggested(word: string) {
      this.search(word);
     // this.showSuggestions = false;

  }
}
