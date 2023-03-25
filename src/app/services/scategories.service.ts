import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scategories } from '../models/scategories';
@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  baseurl="http://localhost:3001/api/scategories";
  constructor(private http:HttpClient) { }
  Listcategories():Observable<Scategories[]>
  {
    return this.http.get<Scategories[]>(this.baseurl);
    
  }
  DeleteScategorie(id : object){
    return this.http.delete<Scategories>(this.baseurl+'/'+ id)
  }
  GetSouscat(id : object):Observable<Scategories>{
    return this.http.get<Scategories>(this.baseurl+'/'+id)
  }
  updatesousCat(id:object,scategorie :Scategories):Observable<Scategories>
  {
    return this.http.put<Scategories>(this.baseurl+'/'+id,scategorie)
  }
}
