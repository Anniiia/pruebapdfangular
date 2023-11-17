import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Alumno } from "../models/alumno";


@Injectable()

export class ServiceAlumnos{
    constructor(private _http: HttpClient){}

    getAlumnos():Observable<any>{
        var request='api/alumnos/filtrarcurso/2023';
        var url=environment.urlApiAlumnos+request;
        return this._http.get(url);
    }
    


}
