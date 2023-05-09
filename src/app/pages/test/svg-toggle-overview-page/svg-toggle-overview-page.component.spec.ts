import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgToggleOverviewPageComponent } from './svg-toggle-overview-page.component';

describe('SvgToggleOverviewPageComponent', () => {
  let component: SvgToggleOverviewPageComponent;
  let fixture: ComponentFixture<SvgToggleOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgToggleOverviewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgToggleOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
