import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromedDetailsComponent } from './promed-details.component';

describe('PromedDetailsComponent', () => {
  let component: PromedDetailsComponent;
  let fixture: ComponentFixture<PromedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
