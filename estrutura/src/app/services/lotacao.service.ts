import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from '../onibus';


@Injectable({
  providedIn: 'root'
})
export class LotacaoService {

  private readonly API = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l'

  constructor(private http: HttpClient) { }

  getLotacao() {
    return this.http.get<Bus[]>(`${this.API}`)
  }
}
