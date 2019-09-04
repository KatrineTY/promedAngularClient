import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePromedComponent } from './create-promed.component';

describe('CreatePromedComponent', () => {
  let component: CreatePromedComponent;
  let fixture: ComponentFixture<CreatePromedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePromedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePromedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
