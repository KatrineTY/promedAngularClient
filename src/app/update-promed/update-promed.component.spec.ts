import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePromedComponent } from './update-promed.component';

describe('UpdatePromedComponent', () => {
  let component: UpdatePromedComponent;
  let fixture: ComponentFixture<UpdatePromedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePromedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePromedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
