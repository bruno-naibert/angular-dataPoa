import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { OnibusService } from './onibus.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OnibusService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule],

  }));

  it('deve ser criado', () => {
    const service: OnibusService = TestBed.get(OnibusService);
    expect(service).toBeTruthy();
  });

  it('deve consultar o serviço de linhas de ônibus',  fakeAsync(
    () => {
      const service: OnibusService = TestBed.get(OnibusService);
      let resp = {};
      service.getBus().subscribe(
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
