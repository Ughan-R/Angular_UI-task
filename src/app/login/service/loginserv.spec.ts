import { TestBed } from '@angular/core/testing';

import { Loginserv } from './loginserv';

describe('Loginserv', () => {
  let service: Loginserv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loginserv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
