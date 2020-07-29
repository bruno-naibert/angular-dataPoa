import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoComponent } from './trajeto.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TrajetoService } from 'src/app/services/trajeto.service';

describe('TrajetoComponent', () => {
  let component: TrajetoComponent;
  let fixture: ComponentFixture<TrajetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ TrajetoComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve retornar trajeto não null',  () => {
    component.ngOnInit();
    expect(component.trajetoFinal).toBeTruthy();
  });


  it('deve retornar as linhas', () => {
    const trajeto = {
      0: {
      lat: '-29.99043858475300000',
      lng: '-51.08882711129000000'
      },
      idlinha: '5282',
      nome: 'A. FEIJO \/ HUMAITA',
      codigo: 'B25-1'
    };
    component.getTrajetoFinal(trajeto);
    expect(component.getTrajetoFinal).toBeTruthy();
  });

  it('deve retornar dado da linha', () => {
    const trajeto = {
      0: {
      lat: '-29.99043858475300000',
      lng: '-51.08882711129000000'
      },
      idlinha: '5282',
      nome: 'A. FEIJO \/ HUMAITA',
      codigo: 'B25-1'
    };
    component.getLinha(trajeto);
    expect(component.linhaCod).toBeTruthy();
    expect(component.linhaId).toBeTruthy();
    expect(component.linhaNome).toBeTruthy();
  });





});


