import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpindleReportsComponent } from './spindle-reports.component';

describe('SpindleReportsComponent', () => {
  let component: SpindleReportsComponent;
  let fixture: ComponentFixture<SpindleReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpindleReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpindleReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
