import { TestBed } from '@angular/core/testing';

import { SidebarService } from './sidebar.service';

describe('SidebarService', () => {
  let service: SidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('sendToggleSidebarState', () => {
    it('should send and get subject', () => {
      var result = false;
      service.getToggleSidebarState().subscribe(() => result = true);

      service.sendToggleSidebarState();

      expect(result).toBeTrue();
    })
  });
});
