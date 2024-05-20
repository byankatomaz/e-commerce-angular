import { TestBed } from '@angular/core/testing';

import { GlobalEventEmmiterService } from './global-event-emmiter.service';

describe('GlobalEventEmmiterService', () => {
  let service: GlobalEventEmmiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalEventEmmiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
