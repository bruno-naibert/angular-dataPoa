import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { OnibusComponent } from './onibus.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('OnibusComponent', () => {
  let component: OnibusComponent;
  let fixture: ComponentFixture<OnibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],

      declarations: [ OnibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve gerar uma mensagem mensagem(m)', () => {
    const mensagem = component.mensagem('teste');
    expect(mensagem).toBeTruthy('teste');
  });

  it('deve popular a lista de onibus', () => {
    expect(component.getOninus).toBeTruthy();
  });



});
