import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-count',
	templateUrl: './count.component.html',
	styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

	@Input() total: number = 10;
	@Input() dir: string = 'down';
	@Input() ms: number = 1000;

	counter: number = 0;
	intervalId!: any;

	constructor() { }

	ngOnInit(): void {
		if (this.dir === 'up') {
			// count up
			this.counter = 0;
			this.countUp();
		} else {
			// count down
			this.counter = this.total;
			this.countDown();
		}
	}

	ngOnDestroy() {
		clearInterval(this.intervalId);
	}

	countDown() {
		this.intervalId = setInterval(() => {
			if (this.counter > 0) {
				this.counter--;
			} else {
				clearInterval(this.intervalId);
			}
		}, this.ms);
	}

	countUp() {
		this.intervalId = setInterval(() => {
			if (this.counter < this.total) {
				this.counter++;
			} else {
				clearInterval(this.intervalId);
			}
		}, this.ms);
	}



}
