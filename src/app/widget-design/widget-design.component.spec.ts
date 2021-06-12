import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDesignComponent } from './widget-design.component';

describe('WidgetDesignComponent', () => {
  let component: WidgetDesignComponent;
  let fixture: ComponentFixture<WidgetDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
