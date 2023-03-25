import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Categories} from '../models/categories';
import { Articles } from '../models/articles';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseurl="http://localhost:3001/api/categories";
 
  constructor(private http:HttpClient) { }
  Listcategories():Observable<Categories[]>
  {
    return this.http.get<Categories[]>(this.baseurl);
  }
  Deletecategorie(id : object){
    return this.http.delete<Categories>(this.baseurl +'/'+id)
  }
  Addcategorie(cat : Categories){
    return this.http.post<Categories>(this.baseurl,cat);
  }
  GetCategorie(id : object):Observable<Categories>{
    return this.http.get<Categories>(this.baseurl+'/'+id)
  }
  updateCat(id:object,categorie : Categories):Observable<Categories>
  {
    return this.http.put<Categories>(this.baseurl+'/'+id,categorie)
  }
}
