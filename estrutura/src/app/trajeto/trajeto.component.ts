import { Component, OnInit } from '@angular/core';
import { TrajetoService } from 'src/app/services/trajeto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trajeto',
  templateUrl: './trajeto.component.html',
  styleUrls: ['./trajeto.component.sass']
})
export class TrajetoComponent implements OnInit {

  trajeto: any;
  trajetoFinal = [];
  param: any;
  linhaId: string;
  linhaCod: string;
  linhaNome: string;

  constructor(private serv: TrajetoService, private activeroute: ActivatedRoute, private route: Router) { }

  home() {
    this.route.navigate(['/home']);
  }

  getTrajetoFinal(t: any) {

    this.trajeto = Object.keys(t).map(key => ({ type: key, value: t[key] }));    

    for (let i = 0; i < this.trajeto.length; i++) {

      if (i < this.trajeto.length - 3) {
        this.trajeto[i].type = parseInt(this.trajeto[i].type);
        this.trajetoFinal.push(this.trajeto[i]);
      }      
    }

    return this.trajetoFinal;
  }

  getLinha(t: any) {
    this.linhaCod = t.codigo;
    this.linhaId = t.idlinha;
    this.linhaNome = t.nome;
  }

  ngOnInit() {
    this.activeroute.paramMap
    .subscribe(p => {
      this.param = p;
      this.serv.getTrajeto(this.param.params.id)
        .subscribe(t => {
          this.trajeto = t;
          this.getLinha(this.trajeto);
          this.getTrajetoFinal(this.trajeto);
        }
        );
      }
    );
  }
}
