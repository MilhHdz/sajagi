import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {
  url_select2 = '';
  url_select3 = '';
  url_select4 = '';
  url_busqueda = '';
  url_equivalencias = '';
  url_aplicaciones = '';
  url_asociados = '';
  // url_select2 = 'https://regres.in/api/user';

  constructor(
    private http: HttpClient
  ) {}

  getSelect2(): Observable<any> {
    return this.http.get<any>(this.url_select2);
  }


  getSelect3(): Observable<any> {
    return this.http.get<any>(this.url_select3);
  }


  getSelect4(): Observable<any> {
    return this.http.get<any>(this.url_select4);
  }


  getBusqueda(): Observable<any> {
    return this.http.get<any>(this.url_busqueda);
  }


  getEquivalencias(): Observable<any> {
    return this.http.get<any>(this.url_equivalencias);
  }


  getAplicaciones(): Observable<any> {
    return this.http.get<any>(this.url_aplicaciones);
  }


  getAsociados(): Observable<any> {
    return this.http.get<any>(this.url_asociados);
  }
}
