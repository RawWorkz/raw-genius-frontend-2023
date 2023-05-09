import { Component, OnInit } from '@angular/core';
import { Timeline } from 'src/app/shared/models/data';
import { TimelineService } from 'src/app/services/timeline.service';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

	title = 'RawWorks ScheduleComponent';

	data!: Timeline;
	errorMessage: string = '';

	constructor(private timelineService: TimelineService) { }

	ngOnInit(): void {
		this.getData();
	}

	getData() {
		this.timelineService.getData().subscribe({
			next: data => {
				this.data = data;
				// console.log(data);
			},
			error: error => {
				this.errorMessage = error.message;
				console.error('There was an error!', error);
			}
		});
	}

}
