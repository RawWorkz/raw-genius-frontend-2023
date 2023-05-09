import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { FeatureFlagsService } from 'src/app/services/feature-flags.service';

import { IRoot } from 'src/app/shared/interfaces/i-root';

import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

	data!: IRoot;

	//
	isProduction = environment.production;
	isProductionText = environment.text;

	constructor(
		private dataService: DataService,
		public featureFlagService: FeatureFlagsService
	) { }

	ngOnInit(): void {
		this.getData();
	}

	getData() {
		this.dataService.getData().subscribe({
			next: data => {
				this.data = data;
			},
			error: error => {
				// this.errorMessage = error.message;
				console.error('There was an error!', error);
			}
		});
	}

	isFeatureEnabled(key: string) {
		return this.featureFlagService.isFeatureEnabled(key);
	}
}
