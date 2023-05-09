// Angular Modules
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISortFilter } from '../shared/interfaces/new/sort-filter';
import { Constants } from './constants';

@Injectable({
	providedIn: 'root'
})
export class Api {

	/**
	 * get the correct values based upon environment data
	 *
	 * @returns
	 */
	static getUrl(): IConstants {
		if (environment.production) {
			// console.info(`PRD`);
			// console.log(`apiUrl: "${environment.apiUrl}"`);
			return {
				env: `PRD`,
				configApi: `${environment.apiUrl}/${Constants.configApi}`,
				bannerApi: `${environment.apiUrl}/${Constants.bannerApi}`,
				helpApi: `${environment.apiUrl}/${Constants.helpApi}`,
				settingsApi: `${environment.apiUrl}/${Constants.settingsApi}`,
				tariffSchedulesApi: `${environment.apiUrl}/${Constants.tariffSchedulesApi}`,
				tariffSchedulesBareApi: `${environment.apiUrl}/${Constants.tariffSchedulesBareApi}`,
				reportsApi: `${environment.apiUrl}/${Constants.reportsApi}`,
				organisationsApi(val: string): string {
					return `${environment.apiUrl}/${Constants.organisationsApi}`.replace(':action', val);
				},
				loginApi(username: string, password: string): string {
					return `${environment.apiUrl}/${Constants.loginURL}?username=${username}&password=${password}`;
				},
				// reports
				urlInstallationDetailsFull: `${environment.apiUrl}/${Constants.urlInstallationDetailsFull}`,
				urlInstallationDetailsErrors: `${environment.apiUrl}/${Constants.urlInstallationDetailsErrors}`,
				urlburninghours: `${environment.apiUrl}/${Constants.urlburninghours}`,
				urlBurningHoursGenerate: `${environment.apiUrl}/${Constants.urlBurningHoursGenerate}`,
				urlSwitchingAction: `${environment.apiUrl}/${Constants.urlSwitchingAction}`,
				urlAntennaInstallation: `${environment.apiUrl}/${Constants.urlAntennaInstallation}`,
				urlInstallationDetailsTelecom: `${environment.apiUrl}/${Constants.urlInstallationDetailsTelecom}`,
				urlDevices(isPublicLightingAllowed: boolean, isTariffSwitchingAllowed: boolean): string {
					// TODO: is this better in Config.urlDevices = '/reports/devices/'; // more data is added
					// see `schedulesApi`
					return `${environment.apiUrl}/reports/devices/${isPublicLightingAllowed}/${isTariffSwitchingAllowed}`;
				},
				urlburninghoursScheduleQuarterly: `${environment.apiUrl}/${Constants.urlburninghoursScheduleQuarterly}`,
				urlburninghoursScheduleMonthly: `${environment.apiUrl}/${Constants.urlburninghoursScheduleMonthly}`,
				urlburninghoursAdhocMonthly: `${environment.apiUrl}/${Constants.urlburninghoursAdhocMonthly}`,
				urlburninghoursAdhocQuarterly: `${environment.apiUrl}/${Constants.urlburninghoursAdhocQuarterly}`,
				// sub
				// schedules
				scheduleApi(id: number): string {
					// GET /schedules/:id
					return `${environment.apiUrl}/${Constants.scheduleApi.replace(':id', `${id}`)}`;
				},
				schedulesApi(id: string, scheduleValue: string, date: string): string {
					//  '/schedules/:id/:schedulevalue/:date';
					let url = Constants.schedulesApi.replace(':id', id).replace(':scheduleValue', scheduleValue).replace(':date', date);
					return `${environment.apiUrl}/${url}`;
				},
				schedulesBareApi: `${environment.apiUrl}/${Constants.schedulesBareApi}`,
				lightMeasurementDevicesApi: `${environment.apiUrl}/${Constants.lightMeasurementDevicesApi}`,

				// org
				organisationLogoApi(organisation: string): string {
					return `${environment.apiUrl}/user/${organisation}/logo`;
				},
				organisationCssApi(organisation: string): string {
					return `${environment.apiUrl}/user/${organisation}/css`;
				},
				// substations
				substationsApi(): string {
					return `${environment.apiUrl}/${Constants.substationsApi}`;
				},
				substationsApiPost(id: string, filter: ISortFilter): string {
					return `${environment.apiUrl}/${Constants.substationsApi}`;
				},
				// groups
				urlSubstationDownload: `${environment.apiUrl}/${Constants.urlSubstationDownload}`,
				groupApi(id: string): string {
					return `${environment.apiUrl}/${Constants.groupsApi.replace(':id', `${id}`)}`;
				},
				groupApiDoAction(id: string): string {
					return `${environment.apiUrl}/${Constants.groupsApiDoAction.replace(':id', `${id}`)}`;
				},
				groupApiSetLight(id: string): string {
					return `${environment.apiUrl}/${Constants.groupsSetLightApi.replace(':id', `${id}`)}`;
				},
				devicesListApi: `${environment.apiUrl}/${Constants.devicesListApi}`,
				devicesListApiPost: `${environment.apiUrl}/${Constants.devicesListApi}`,
			}
		} else {
			// console.info(`TEST`);
			// console.log(`apiUrl: "${environment.apiUrl}"`);
			return {
				env: `TEST`,
				configApi: `/assets/dummy/json/application.json`,
				bannerApi: `/assets/dummy/json/banner.json`,
				helpApi: `/assets/dummy/json/help.json`,
				settingsApi: `/assets/dummy/json/settings.json`,
				tariffSchedulesApi: `FOO`,
				tariffSchedulesBareApi: `/assets/dummy/json/tariff_bare.json`,
				reportsApi: `/assets/dummy/json/overview.json`,
				organisationsApi(val: string): string {
					return `/assets/dummy/json/organisations.json?val=${val}`;
				},
				loginApi(username: string, password: string): string {
					return `/assets/dummy/json/login.json?username=${username}&password=${password}`;
				},
				// reports
				urlInstallationDetailsFull: `/assets/dummy/csv/foo.csv`,
				urlInstallationDetailsErrors: `/assets/dummy/csv/foo.csv`,
				urlburninghours: `/assets/dummy/csv/foo.csv`,
				urlBurningHoursGenerate: `/assets/dummy/csv/foo.csv`,
				urlSwitchingAction: `/assets/dummy/csv/foo.csv`,
				urlAntennaInstallation: `/assets/dummy/csv/foo.csv`,
				urlInstallationDetailsTelecom: `/assets/dummy/csv/foo.csv`,
				urlDevices(isPublicLightingAllowed: boolean, isTariffSwitchingAllowed: boolean): string {
					// TODO: is this better in Config.urlDevices = '/reports/devices/'; // more data is added
					return `/assets/dummy/csv/devices.csv?isPublicLightingAllowed=${isPublicLightingAllowed}&isTariffSwitchingAllowed=${isTariffSwitchingAllowed}`;
				},
				urlburninghoursScheduleQuarterly: `/assets/dummy/csv/foo.csv?`,
				urlburninghoursScheduleMonthly: `/assets/dummy/csv/foo.csv?`,
				urlburninghoursAdhocMonthly: `/assets/dummy/csv/foo.csv?`,
				urlburninghoursAdhocQuarterly: `/assets/dummy/csv/foo.csv?`,
				// schedules
				scheduleApi(id: number): string {
					if (id == 0) return `/assets/dummy/json/schedule0.json?id=${id}`
					return `/assets/dummy/json/schedules_detail.json?id=${id}`
				},
				schedulesApi(id: string, scheduleValue: string, date: string): string {
					return `/assets/dummy/json/schedules_detail.json?id=${id}&scheduleValue=${scheduleValue}&date=${date}`
				},
				schedulesBareApi: `/assets/dummy/json/schedules.json`,
				lightMeasurementDevicesApi: `/assets/dummy/json/devices.json`,
				// org
				organisationLogoApi(organisation: string): string {
					return `/assets/images/user/alliander/logo.png?organisation=${organisation}`;
				},
				organisationCssApi(organisation: string): string {
					return `/assets/images/user/alliander/css.css?organisation=${organisation}`;
				},
				substationsApi(): string {
					return `/assets/dummy/json/substations.json`;
				},
				substationsApiPost(id: string, filter: ISortFilter): string {
					return `/assets/dummy/json/substations.json?id=${id}&filter=${filter}`;
				},
				urlSubstationDownload: `/assets/dummy/csv/foo.csv`,
				groupApi(id: string): string {
					const value = parseInt(id);
					if (id == '0') return `/assets/dummy/json/groups.json?id=${id}`;
					// get data with an high value...
					if (value > 100 && value < 300) return `/assets/dummy/json/groups_id_202.json`;
					return `/assets/dummy/json/groups.json?id=${id}`;
				},
				groupApiDoAction(id: string): string {
					// const value = parseInt(id);
					// if (id == '0') return `/assets/dummy/json/groups.json?id=${id}`;
					// // get data with an high value...
					// if (value > 100 && value < 300) return `/assets/dummy/json/groups_id_202.json`;
					return `/assets/dummy/json/get-status.json?id=${id}`;
				},
				groupApiSetLight(id: string): string {
					// const value = parseInt(id);
					// if (id == '0') return `/assets/dummy/json/groups.json?id=${id}`;
					// // get data with an high value...
					// if (value > 100 && value < 300) return `/assets/dummy/json/groups_id_202.json`;
					return `/assets/dummy/json/set-light.json?id=${id}`;
				},
				devicesListApi: `/assets/dummy/json/devices-list.json`,
				devicesListApiPost: `/assets/dummy/json/groups_id_202_devices.json`,

			}
		}
	}
}


export interface IConstants {
	env: string;

	configApi: string;
	helpApi: string;
	bannerApi: string;
	settingsApi: string;
	reportsApi: string;
	loginApi(username: string, password: string): string;

	// schedules
	schedulesBareApi: string;
	scheduleApi: (id: number) => string;
	schedulesApi: (id: string, scheduleValue: string, date: string) => string;
	// schedulesBareApi(ISchedulesData: any): string;

	tariffSchedulesApi: string;
	tariffSchedulesBareApi: string;

	lightMeasurementDevicesApi: string;

	organisationsApi: (val: string) => string;

	// reports
	urlInstallationDetailsFull: string;
	urlInstallationDetailsErrors: string;

	urlburninghours: string;
	urlBurningHoursGenerate: string;
	urlSwitchingAction: string;
	urlAntennaInstallation: string;
	urlInstallationDetailsTelecom: string;
	urlDevices(isPublicLightingAllowed: boolean, isTariffSwitchingAllowed: boolean): string;
	urlburninghoursScheduleQuarterly: string;
	urlburninghoursScheduleMonthly: string;
	urlburninghoursAdhocMonthly: string;
	urlburninghoursAdhocQuarterly: string;

	// user
	organisationLogoApi: (organisation: string) => string;
	organisationCssApi: (organisation: string) => string;

	// substations
	substationsApi: () => string;
	substationsApiPost: (id: string, filter: ISortFilter) => string;
	urlSubstationDownload: string;

	// group
	groupApi: (id: string) => string;
	groupApiDoAction: (id: string) => string;
	groupApiSetLight: (id: string) => string;

	// devices
	devicesListApi: string;
	devicesListApiPost: string;
}
