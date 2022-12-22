import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITipoOrganizacion } from '../interfaces/TipoOrganizacion.interface';

@Injectable({
  providedIn: 'root'
})
export class TipoOrganizacionService {

  endpoint: string = "https://obedient-run-production.up.railway.app/api"; // http://localhost:8090/api

  constructor(private http: HttpClient) { }

  getTipoOrganziacionSocial() {
      return this.http.get<ITipoOrganizacion[]>(`${this.endpoint}/tipoOrganizacion/listartipoOrg`);
  }
}
