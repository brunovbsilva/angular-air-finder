import { TestBed } from '@angular/core/testing';

import { BattlegroundService } from './battleground.service';

describe('BattlegroundService', () => {
  let service: BattlegroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattlegroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
