import { TestBed } from '@angular/core/testing';

import { PostjobinfoService } from './postjobinfo.service';

describe('PostjobinfoService', () => {
  let service: PostjobinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostjobinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
