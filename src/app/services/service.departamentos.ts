import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Departamento } from "../models/departamento";
import { environment } from "../../environments/environment.development";


@Injectable()
export class ServiceDepartamentos {
    constructor(private _http: HttpClient){}

    getDepartamentos(): Observable<Array<Departamento>> {
        let request = "api/Departamentos";
        let url = environment.urlDepartamentos + request;
        return this._http.get<Array<Departamento>>(url);
    }

    getDepartamento(id: number): Observable<Departamento> {
        let request = "api/Departamentos/" + id;
        let url = environment.urlDepartamentos + request;
        return this._http.get<Departamento>(url);
    }

    createDepartamento(departamento: Departamento): Observable<any> {
        //IGUAL QUE EN REACT O EN JQUERY
        let json = JSON.stringify(departamento);
        //CREAMOS LA CABECERA DE LA PETICION
        let header = new HttpHeaders().set("Content-type", "application/json");
        //INDICAMOS EL TIPO DE OBJETO A ENVIAR EN DATA
        let request = "api/Departamentos";
        let url = environment.urlDepartamentos + request;
        return this._http.post(url, json, {headers: header});
    }
}