import { TestBed, inject } from '@angular/core/testing';

import { CommonApiServiceService } from './common-api-service.service';

describe('CommonApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonApiServiceService]
    });
  });

  it('should be created', inject([CommonApiServiceService], (service: CommonApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
