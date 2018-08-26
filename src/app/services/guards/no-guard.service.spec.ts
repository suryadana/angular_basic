import { TestBed, inject } from '@angular/core/testing';

import { NoGuardService } from './no-guard.service';

describe('NoGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoGuardService]
    });
  });

  it('should be created', inject([NoGuardService], (service: NoGuardService) => {
    expect(service).toBeTruthy();
  }));
});
