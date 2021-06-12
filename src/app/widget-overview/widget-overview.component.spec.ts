import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetOverviewComponent } from './widget-overview.component';

describe('WidgetOverviewComponent', () => {
  let component: WidgetOverviewComponent;
  let fixture: ComponentFixture<WidgetOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
