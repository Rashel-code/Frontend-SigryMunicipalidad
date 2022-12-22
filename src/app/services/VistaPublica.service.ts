import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Requisito } from '../models/Requisito.model';

@Injectable({
    providedIn: 'root'
})
export class VistaPublicaService {

    endpoint: string = "https://obedient-run-production.up.railway.app/api"; // http://localhost:8090/api

    constructor(private http: HttpClient) { }

    listarRequisitos() {
        return this.http.get<Requisito[]>(`${this.endpoint}/vistaPublica/listarRequsitos`);
    }

}
