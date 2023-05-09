
import { Routes } from "@angular/router";

import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { SchedulesPageComponent } from "../pages/schedules-page/schedules-page.component";

import { StyleguideComponent } from "../pages/styleguide/styleguide.component";


export const defaultRoutes: Routes = [
	{ path: "", title: "Home", component: HomePageComponent },
	{ path: "home", title: "Home", pathMatch: "full", redirectTo: "" },

	// { path: "home", title: "Home", component: HomePageComponent },
	{ path: "about", title: "About", component: AboutPageComponent },
	{ path: "schedule", title: "Schedule", component: SchedulesPageComponent },
];

