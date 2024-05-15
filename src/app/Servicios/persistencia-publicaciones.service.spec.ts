import { TestBed } from '@angular/core/testing';

import { PersistenciaPublicacionesService } from './persistencia-publicaciones.service';

describe('PersistenciaPublicacionesService', () => {
  let service: PersistenciaPublicacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistenciaPublicacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
