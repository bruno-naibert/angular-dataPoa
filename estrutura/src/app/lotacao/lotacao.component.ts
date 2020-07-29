import { Component, OnInit } from '@angular/core';
import { LotacaoService } from 'src/app/services/lotacao.service';
import { Observable } from 'rxjs';
import { Bus } from '../onibus';

@Component({
  selector: 'app-lotacao',
  templateUrl: './lotacao.component.html',
  styleUrls: ['./lotacao.component.sass']
})
export class LotacaoComponent implements OnInit {
  lotacoes: any;
  lotacao$: Observable<Bus[]>;

  constructor(private serv: LotacaoService) { }

  getLotacao() {
    this.lotacao$ = this.serv.getLotacao();
  }

  ngOnInit() {
    this.getLotacao();
  }

}
