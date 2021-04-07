import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  word: string = '';
  existError: boolean = false;

  constructor(private countryService: CountryService) {}

  buscar(){
      this.existError = false;

    this.countryService.searchCountry(this.word)
    .subscribe((response) =>{
        console.log(response);
    }, (err) =>{
        this.existError = true;
    });
    console.log(this.word);
  }



}
