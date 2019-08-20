import { TestBed } from '@angular/core/testing';

import { ActionReaderService } from './action-reader.service';

describe('ActionReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionReaderService = TestBed.get(ActionReaderService);
    expect(service).toBeTruthy();
  });
});
