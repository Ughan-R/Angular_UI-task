import { TestBed } from '@angular/core/testing';

import { Getapidata } from './getapidata';

describe('Getapidata', () => {
  let service: Getapidata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getapidata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
