import { Routes } from "@angular/router";

import { StyleguideComponent } from "../pages/styleguide/styleguide.component";
import { VideoOverviewPageComponent } from "../pages/test/video-overview-page/video-overview-page.component";
import { StyleguideButtonsComponent } from "../pages/styleguide-buttons/styleguide-buttons.component";
import { StrapiApiOverviewPageComponent } from "../pages/test/strapi-api-overview-page/strapi-api-overview-page.component";
import { SvgToggleOverviewPageComponent } from "../pages/test/svg-toggle-overview-page/svg-toggle-overview-page.component";

export const testRoutes: Routes = [
	{ path: "styleguide", title: "Styleguide", component: StyleguideComponent },
	{ path: "styleguide-buttons", title: "Styleguide buttons", component: StyleguideButtonsComponent },
	{ path: "video-overview", title: "VideoOverviewPageComponent", component: VideoOverviewPageComponent },
	{ path: "strapi-api-overview", title: "StrapiApiOverviewPageComponent", component: StrapiApiOverviewPageComponent },
	{ path: "svg-overview", title: "SvgToggleOverviewPageComponent", component: SvgToggleOverviewPageComponent },
];
