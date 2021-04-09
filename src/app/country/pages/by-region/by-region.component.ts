import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';

  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getCssClass(region: string): string {
    return region === this.regionActive
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activeRegion(region: string) {
    if (region === this.regionActive) {
      return;
    }
    this.regionActive = region;
    this.countries = [];
    this.countryService.getCountriesByRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
