import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-svg-toggle-overview-page',
	templateUrl: './svg-toggle-overview-page.component.html',
	styleUrls: ['./svg-toggle-overview-page.component.scss']
})
export class SvgToggleOverviewPageComponent implements OnInit {

	svgIcon: any;
	groups!: SVGElement[];

	constructor(
		private http: HttpClient,
		private sanitizer: DomSanitizer,
	) { }

	ngOnInit(): void {
		const url = 'assets/svg/rawgenius_logo_head.min.svg';
		this.http.get(url, { responseType: 'text' }).subscribe({
			next: (data) => {
				// console.info('::next');
				// console.log(data);
				this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(data);
				// hmmmmm feels a bit hacky, but works!
				setTimeout(() => {
					this.getIDs();
				}, 50);
			},
			error: (e) => {
				console.error('::error');
				console.error(e);
			},
			complete: () => {
				// console.info('::complete');
			}
		});

	}
	getIDs() {
		const div: HTMLElement = document.getElementById('container-svg') as HTMLElement;
		let svgGroups = div.getElementsByTagName("g");

		// Convert the HTMLCollection to an array
		this.groups = Array.from(svgGroups);
	}

	toggleOpacity(svgEl: SVGElement) {
		const klass = 'opacity-50';
		if (svgEl.classList.contains(klass)) {
			svgEl.classList.remove(klass);
		} else {
			svgEl.classList.add(klass);
		}
	}

	toggleIcon(svgEl: SVGElement) {
		const klass = 'opacity-50';
		if (svgEl.classList.contains(klass)) {
			return 'fa-toggle-on';
		} else {
			return 'fa-toggle-off';
		}
	}

	toggleIconDisplay(svgEl: SVGElement) {
		if (svgEl.style.display !== 'none') {
			return 'fa-toggle-on';
		} else {
			return 'fa-toggle-off';
		}
	}

	toggleDisplay(svgEl: SVGElement) {
		svgEl.style.display = svgEl.style.display === 'none' ? '' : 'none';
	}

	isDisplayNone(svgEl: SVGElement): boolean {
		return svgEl.style.display === 'none';
	}

	elementDepthSpace(svgEl: SVGElement): string {
		let el: Element = svgEl;
		var depth = '';
		while (null !== el.parentElement && el.nodeName !== 'svg') {
			el = el.parentElement as Element;
			// console.log(el.nodeName);
			depth += '___'; //
		}
		return depth;
	}

	elementDepth(svgEl: SVGElement): number {
		let el: Element = svgEl;
		var depth = 0;
		while (null !== el.parentElement && el.nodeName !== 'svg') {
			el = el.parentElement as Element;
			// console.log(el.nodeName);
			depth++;
		}
		return depth;
	}

}
