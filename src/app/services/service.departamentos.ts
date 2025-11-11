import { HttpClient } from "@angular/common/http";
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
}