import { TestBed, inject } from '@angular/core/testing';

import { ToSubscriptService } from './to-subscript.service';

describe('ToSubscriptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToSubscriptService]
    });
  });

  it('should be created', inject([ToSubscriptService], (service: ToSubscriptService) => {
    expect(service).toBeTruthy();
  }));
});
