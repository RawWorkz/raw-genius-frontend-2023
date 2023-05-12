import { Routes } from "@angular/router";

import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { StyleguideComponent } from "../pages/styleguide/styleguide.component";
import { SchedulesPageComponent } from "../pages/schedules-page/schedules-page.component";
import { EmojiPageComponent } from "../pages/emoji-page/emoji-page.component";

export const pagesRoutes: Routes = [
	{ path: "home", title: "Home", component: HomePageComponent },
	{ path: "about", title: "About", component: AboutPageComponent },
	{ path: "styleguide", title: "Styleguide", component: StyleguideComponent },
	{ path: "schedule", title: "Schedule", component: SchedulesPageComponent },
	{ path: "emoji", title: "Emojis", component: EmojiPageComponent },
];

