import { Bus } from './../onibus';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OnibusService {

  private readonly API = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o';

  constructor(private http: HttpClient) { }

  getBus() {
    return this.http.get<Bus[]>(`${this.API}`)
  }
}
