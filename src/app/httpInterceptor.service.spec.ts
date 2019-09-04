import { TestBed } from '@angular/core/testing';

import { HttpInterceptor.Service } from './http-interceptor..service';

describe('HttpInterceptor.Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceptor.Service = TestBed.get(HttpInterceptor.Service);
    expect(service).toBeTruthy();
  });
});
