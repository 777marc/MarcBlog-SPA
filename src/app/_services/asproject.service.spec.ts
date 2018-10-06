/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AsprojectService } from './asproject.service';

describe('Service: Asproject', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsprojectService]
    });
  });

  it('should ...', inject([AsprojectService], (service: AsprojectService) => {
    expect(service).toBeTruthy();
  }));
});
