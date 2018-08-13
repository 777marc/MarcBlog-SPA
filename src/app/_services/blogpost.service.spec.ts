/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogpostService } from './blogpost.service';

describe('Service: Blogpost', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogpostService]
    });
  });

  it('should ...', inject([BlogpostService], (service: BlogpostService) => {
    expect(service).toBeTruthy();
  }));
});
