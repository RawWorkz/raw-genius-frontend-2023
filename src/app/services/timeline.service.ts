import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timeline } from '../shared/models/data';

@Injectable({
	providedIn: 'root'
})
export class TimelineService {

	private url = 'assets/rawworks_genius_2023_timetable.json';

	constructor(private http: HttpClient) { }

	getData() {
		return this.http.get<Timeline>(this.url);
	}
}
