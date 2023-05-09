import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrapiApiOverviewPageComponent } from './strapi-api-overview-page.component';

describe('StrapiApiOverviewPageComponent', () => {
  let component: StrapiApiOverviewPageComponent;
  let fixture: ComponentFixture<StrapiApiOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrapiApiOverviewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrapiApiOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
