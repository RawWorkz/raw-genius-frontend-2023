import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoOverviewPageComponent } from './video-overview-page.component';

describe('VideoOverviewPageComponent', () => {
  let component: VideoOverviewPageComponent;
  let fixture: ComponentFixture<VideoOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoOverviewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
