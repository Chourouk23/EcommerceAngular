import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categories } from 'src/app/models/categories';
@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
  categories:Categories[]
constructor(private catserv:CategoriesService){}
ngOnInit(){
  return this.catserv.Listcategories().subscribe(data =>this.categories= data),
      (err:any)=>console.log(err)
}
suppCategorie(id : object){
  return this.catserv.Deletecategorie(id).subscribe(data=>{this.ngOnInit()})
}
}
