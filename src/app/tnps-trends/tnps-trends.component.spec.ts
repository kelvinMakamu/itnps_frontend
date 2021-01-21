import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnpsTrendsComponent } from './tnps-trends.component';

describe('TnpsTrendsComponent', () => {
  let component: TnpsTrendsComponent;
  let fixture: ComponentFixture<TnpsTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnpsTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TnpsTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
