import { TestBed } from '@angular/core/testing';

import { ScopePermissionsService } from './scope-permissions.service';

describe('ScopePermissionsService', () => {
  let service: ScopePermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScopePermissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
