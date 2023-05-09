/*
Copyright 2014-2022 Smart Society Services B.V.
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../shared/config/api';

@Injectable({
	providedIn: 'root'
})
export class CsvDownloadService {

	constructor(
		private http: HttpClient,
	) { }

	/**
	 * Download the csv and output it via the browser
	 *
	 * @param url		csv downloaded from server
	 * @param filename	the filename of the the browser will generate
	 * @returns
	 */
	public generateCSVForDownload(url: string, filename: string): void {
		this.http.get(url, { responseType: "text" }).subscribe(data => {
			// you may improve this code to customize the name
			var outputCSV = data;
			let blob = new Blob([outputCSV], { type: 'text/plain' });
			// type: "text/csv;charset=utf-8"
			let exportLink = document.getElementById('exportLink');
			if (exportLink === null) {
				exportLink = document.createElement('a');
				document.body.appendChild(exportLink);
			}
			// Browsers that support HTML5 download attribute (Firefox, Chrome)
			exportLink.setAttribute('download', filename);
			exportLink.setAttribute('href', window.URL.createObjectURL(blob));
			exportLink.click();
		});
	}

}


// original: `/frontend/app/scripts/services/csvDownloadService.js`


/**


'use strict';

// eslint-disable-next-line no-undef
var app = angular.module('rootApp');
app.factory('csvDownloadService', function ($rootScope, $http, i18nNotifications) {

	var service = {
		// Download helper function.
		generateCSVForDownload : function(url, filename) {
			$http.get(url).then(function successCallback(response) {
				var outputCSV = response.data;
				var blob = new Blob([outputCSV], {type: 'text/plain'});
				var exportLink = document.getElementById('exportLink');

				if(exportLink.download !== undefined) {
					// Browsers that support HTML5 download attribute (Firefox, Chrome)
					exportLink.setAttribute('download', filename);
					exportLink.setAttribute('href', window.URL.createObjectURL(blob));
				} else if(navigator.msSaveBlob) {
					// IE 10+ - uses empty link to stay on same page
					exportLink.setAttribute('href', '');
					navigator.msSaveBlob(blob, filename);
				} else {
					// it needs to implement server side export
					document.getElementById('invisible_iframe').src = url;
				}

				exportLink.click();
			}, function errorCallback(response) {
				i18nNotifications.pushForCurrentRoute('general.error', 'danger', {
					message : response.data
				});
			});
		}
	};
	return service;

});


*/
