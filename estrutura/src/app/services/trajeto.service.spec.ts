import { TestBed, tick, fakeAsync } from '@angular/core/testing';

import { TrajetoService } from './trajeto.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TrajetoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule],

  }));

  it('deve ser criado', () => {
    const service: TrajetoService = TestBed.get(TrajetoService);
    expect(service).toBeTruthy();
  });

  it('deve consultar o serviço de trajeto da linha 5529',  fakeAsync(
    () => {
      const service: TrajetoService = TestBed.get(TrajetoService);
      let resp = {};
      service.getTrajeto(5529).subscribe(
        t => {
          resp = t;
        },
        e => {}
      );
      tick(100);
      expect(resp).toBeTruthy();
    }
  ));

});
