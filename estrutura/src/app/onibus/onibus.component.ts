import { Component, OnInit } from '@angular/core';
import { OnibusService } from 'src/app/services/onibus.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bus } from '../onibus';

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.sass']
})
export class OnibusComponent implements OnInit {

  onibus: any;
  onibus$: Observable<Bus[]>;

  constructor( private serv: OnibusService, private route: Router ) { }

  setItinerario(id: number) {
    this.route.navigate(['/trajeto', id]);
  }

  getOnibus() {
    // return this.onibus;
    this.onibus$ = this.serv.getBus();
  }

  ngOnInit() {
    this.getOnibus()
    return this.serv.getBus().subscribe(o => {this.onibus = o;});
  }

}
