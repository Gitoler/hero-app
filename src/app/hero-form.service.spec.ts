import { TestBed } from '@angular/core/testing';

import { HeroFormService } from './hero-form.service';

describe('HeroFormService', () => {
  let service: HeroFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
