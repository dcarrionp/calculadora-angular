import { TestBed } from '@angular/core/testing';

import { ServiceJavaService } from './service-java.service';

describe('ServiceJavaService', () => {
  let service: ServiceJavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceJavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
