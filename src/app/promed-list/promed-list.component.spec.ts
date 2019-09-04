import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromedListComponent } from './promed-list.component';

describe('PromedListComponent', () => {
  let component: PromedListComponent;
  let fixture: ComponentFixture<PromedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
