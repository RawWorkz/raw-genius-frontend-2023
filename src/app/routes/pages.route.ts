import { Routes } from "@angular/router";

import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { StyleguideComponent } from "../pages/styleguide/styleguide.component";
import { ScheduleComponent } from "../components/schedule/schedule.component";
import { SchedulesPageComponent } from "../pages/schedules-page/schedules-page.component";

export const pagesRoutes: Routes = [
	{ path: "home", title: "Home", component: HomePageComponent },
	{ path: "about", title: "About", component: AboutPageComponent },
	{ path: "styleguide", title: "Styleguide", component: StyleguideComponent },
	{ path: "schedule", title: "Schedule", component: SchedulesPageComponent },
];

