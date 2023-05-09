import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';
import { ISpeakers } from 'src/app/shared/interfaces/i-speakers';

@Component({
	selector: 'app-strapi-api-overview-page',
	templateUrl: './strapi-api-overview-page.component.html',
	styleUrls: ['./strapi-api-overview-page.component.scss']
})
export class StrapiApiOverviewPageComponent implements OnInit {

	title = 'Strapi api overview page';

	data!: ISpeakers;
	allData!: ISpeakers;

	constructor(
		private homepageService: HomepageService,
	) { }

	ngOnInit() {
		this.homepageService.getData().subscribe({
			next: (data) => {
				console.info('::next');
				console.log(data);
				this.data = data;
			},
			error: (e) => {
				console.info('::error');
				console.error(e);
			},
			complete: () => {
				console.info('::complete');
			}
		});
		this.homepageService.getAllData().subscribe(data => {
			this.allData = data;
		});
	}
}
