import { TestBed } from '@angular/core/testing';

import { WorldStateService } from './world-state.service';

describe('WorldStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldStateService = TestBed.get(WorldStateService);
    expect(service).toBeTruthy();
  });
});
