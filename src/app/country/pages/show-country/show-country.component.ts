import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
})
export class ShowCountryComponent implements OnInit {

    country!: Country;


  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.countryService.getCountryByCode(params.id)),
        tap(console.log)
      )
      .subscribe(country => this.country = country);
    // this.activatedRoute.params.subscribe((params) => {
    //   this.countryService
    //     .getCountryByCode(params.id)
    //     .subscribe((country) => {
    //         console.log(country);
    //     });
    // });
  }
}
