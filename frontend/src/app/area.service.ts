import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { AreaInfo } from './areas-served/areaInfo';
@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(public http:HttpClient) { }

  createAreaDetails(areaInfo):Observable<any>{
    return this.http.post("http://localhost:3000/api/areaDetails/create",areaInfo);
  }

  getAllAreaDetails():Observable<AreaInfo[]>{
    return this.http.get<AreaInfo[]>("http://localhost:3000/api/areaDetails/findAll");
  }
}
