import { TestBed } from '@angular/core/testing';

import { Ajuste } from './ajuste';

describe('Ajuste', () => {
  let service: Ajuste;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ajuste);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
