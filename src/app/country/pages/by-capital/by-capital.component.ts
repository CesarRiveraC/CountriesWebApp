import { Component, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {
  word: string = '';
  existError: boolean = false;
  countriesByCapital: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(word: string) {
    this.existError = false;
    this.word = word;

    this.countryService.searchCapital(this.word).subscribe(
      (countries) => {
        this.countriesByCapital = countries;
      },
      (error) => {
        this.existError = true;
      }
    );
  }

}
