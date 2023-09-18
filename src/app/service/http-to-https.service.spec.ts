import { TestBed } from '@angular/core/testing';

import { HttpToHttpsService } from './http-to-https.service';

describe('HttpToHttpsService', () => {
  let service: HttpToHttpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpToHttpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
