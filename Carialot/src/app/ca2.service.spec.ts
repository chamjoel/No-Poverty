import { TestBed } from '@angular/core/testing';

import { Ca2Service } from './ca2.service';

describe('ca2Service', () => {
  let service: Ca2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ca2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
