import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PacienteResourceService {

  commonUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:WwQP6b4e/paciente';


  constructor(private http: HttpClient) { }
  search(): Observable<any[]> {
    let token: string;
    // @ts-ignore

    token = sessionStorage.getItem('token') ?? '';
    if (!token) {return of([]);}
    return this.http.get<any[]>(`${this.commonUrl}`, {
      headers: {
        Authorization: token ? `${token}` : '',
      }
    });
  }

  create(usuario: any): Observable<any>{
    let token: string;

    // @ts-ignore
    token = sessionStorage.getItem('token') ?? '';
    if (!token) {return of({});}
    return this.http.post<any>(this.commonUrl, usuario,{
      headers: {
        Authorization: token ? `${token}` : '',
      }
    });
  }

}
