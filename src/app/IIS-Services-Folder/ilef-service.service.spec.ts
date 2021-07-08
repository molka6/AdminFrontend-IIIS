import { TestBed } from '@angular/core/testing';

import { IlefServiceService } from './ilef-service.service';

describe('IlefServiceService', () => {
  let service: IlefServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IlefServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
