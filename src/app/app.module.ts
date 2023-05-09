import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// components
import { Col2Component } from './components/col2/col2.component';
import { ContactComponent } from './components/contact/contact.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { PeopleComponent } from './components/people/people.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TitleComponent } from './components/title/title.component';
import { VideoDefaultComponent } from './components/video-default/video-default.component';
import { VideoVimeoComponent } from './components/video-vimeo/video-vimeo.component';
import { VideoYoutubeComponent } from './components/video-youtube/video-youtube.component';

// elements
import { AddressComponent } from './elements/address/address.component';
import { AnchorComponent } from './elements/anchor/anchor.component';
import { Btn2topComponent } from './elements/btn2top/btn2top.component';
import { CountComponent } from './elements/count/count.component';
import { CountTriggerComponent } from './elements/count-trigger/count-trigger.component';

import { IconsComponent } from './elements/icons/icons.component';
import { InfoComponent } from './elements/info/info.component';
import { SocialsComponent } from './elements/socials/socials.component';

// pages
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ColorsComponent } from './pages/styleguide/colors/colors.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { VideoOverviewPageComponent } from './pages/test/video-overview-page/video-overview-page.component';

// misc
import { DebugIdComponent } from './elements/debug-id/debug-id.component';
import { SchedulesPageComponent } from './pages/schedules-page/schedules-page.component';
import { DebugDirective } from './shared/directives/debug.directive';
import { ScheduleSessionInfoComponent } from './elements/schedule-session-info/schedule-session-info.component';
import { PublicLayoutComponent } from './layouts/public/public-layout/public-layout.component';
import { FullscreenLayoutComponent } from './layouts/fullscreen/fullscreen-layout/fullscreen-layout.component';
import { AuthorisedLayoutComponent } from './layouts/authorised/authorised-layout/authorised-layout.component';
import { HeroVideoRawGeniusComponent } from './components/hero-video-rawgenius/hero-video-rawgenius.component';
import { StyleguideButtonsComponent } from './pages/styleguide-buttons/styleguide-buttons.component';
import { StrapiApiOverviewPageComponent } from './pages/test/strapi-api-overview-page/strapi-api-overview-page.component';
import { SessionsPageComponent } from './pages/sessions-page/sessions-page.component';
import { SpeakersPageComponent } from './pages/speakers-page/speakers-page.component';
import { CodeComponent } from './components/code/code.component';
import { SvgToggleOverviewPageComponent } from './pages/test/svg-toggle-overview-page/svg-toggle-overview-page.component';
import { CalendarIcsComponent } from './components/calendar-ics/calendar-ics.component';
import { FeatureFlagDirective } from './shared/directives/feature-flag.directive';
import { FeatureFlagsService } from './services/feature-flags.service';
import { Contact3Component } from './components/contact3/contact3.component';
import { HelloTwoComponent } from './components/hello-two/hello-two.component';


const featureFactory = (featureFlagsService: FeatureFlagsService) => () => featureFlagsService.loadConfig();



@NgModule({
	declarations: [
		AboutPageComponent,
		AddressComponent,
		AnchorComponent,
		AppComponent,
		Btn2topComponent,
		Col2Component,
		ColorsComponent,
		ContactComponent,
		CountComponent,
		CountTriggerComponent,
		CtaComponent,
		DebugIdComponent,


		FooterComponent,
		GalleryComponent,
		HomePageComponent,
		IconsComponent,
		InfoComponent,
		NavComponent,
		NotFoundPageComponent,
		PeopleComponent,
		PlaceholderComponent,
		QuoteComponent,
		ScheduleComponent,
		ScheduleSessionInfoComponent,
		SchedulesPageComponent,
		SocialsComponent,
		SponsorsComponent,
		StyleguideComponent,
		TestimonialsComponent,
		TitleComponent,

		VideoDefaultComponent,
		VideoOverviewPageComponent,
		VideoVimeoComponent,
		VideoYoutubeComponent,
		PublicLayoutComponent,
		FullscreenLayoutComponent,
		AuthorisedLayoutComponent,
		HeroVideoRawGeniusComponent,
		StyleguideButtonsComponent,
		StrapiApiOverviewPageComponent,
		SessionsPageComponent,
		SpeakersPageComponent,
		CodeComponent,
		SvgToggleOverviewPageComponent,
		CalendarIcsComponent,
		FeatureFlagDirective,
  Contact3Component,
  HelloTwoComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [
		DebugDirective,
		{
			provide: APP_INITIALIZER,
			useFactory: featureFactory,
			deps: [FeatureFlagsService],
			multi: true
		}],
	bootstrap: [AppComponent]
})
export class AppModule { }
