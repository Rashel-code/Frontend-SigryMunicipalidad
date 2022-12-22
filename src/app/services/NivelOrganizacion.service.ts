import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INivelOrganizacion } from '../interfaces/NivelOrganizacion.interface';

@Injectable({
    providedIn: 'root'
})
export class NivelOrganizacionService {

    endpoint: string = "https://obedient-run-production.up.railway.app/api"; // http://localhost:8090/api

    constructor(private http: HttpClient) { }

    getNivelOrganizacionSocial() {
        return this.http.get<INivelOrganizacion[]>(`${this.endpoint}/nivelOrganizacion/listarNivelOrg`);
    }

}
