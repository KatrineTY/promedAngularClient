import { TestBed } from '@angular/core/testing';

import { PromedService } from './promed.service';

describe('PromedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromedService = TestBed.get(PromedService);
    expect(service).toBeTruthy();
  });
});
