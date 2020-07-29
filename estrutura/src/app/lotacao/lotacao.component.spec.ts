import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { LotacaoComponent } from './lotacao.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LotacaoComponent', () => {
  let component: LotacaoComponent;
  let fixture: ComponentFixture<LotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ LotacaoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve consultar o servico de lotacão', fakeAsync(
    () => {
      const lotacao = component.getLotacoes();
      expect(lotacao).toBeTruthy();
    }
  ));

  it('deve criar uma mensagem', () => {
    const mensagem = component.mensagem('teste');
    expect(mensagem).toEqual('teste');
  });




});
