import { TestBed } from '@angular/core/testing';

import { PolygonAreaService } from './polygon-area.service';

describe('PolygonAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolygonAreaService = TestBed.get(PolygonAreaService);
    expect(service).toBeTruthy();
  });
});
