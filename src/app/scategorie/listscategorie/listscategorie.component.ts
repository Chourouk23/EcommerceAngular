import { Component } from '@angular/core';
import { Scategories } from 'src/app/models/scategories';
import { ScategoriesService } from 'src/app/services/scategories.service';
@Component({
  selector: 'app-listscategorie',
  templateUrl: './listscategorie.component.html',
  styleUrls: ['./listscategorie.component.css']
})
export class ListscategorieComponent {
  scategories:Scategories[];
  constructor(private scatserv:ScategoriesService){}
ngOnInit(){
  return this.scatserv.Listcategories().subscribe(data =>this.scategories=data),
      (err:any)=>console.log(err)
}
suppScategorie(id : object){
  return this.scatserv.DeleteScategorie(id).subscribe(data=>{this.ngOnInit()})
}
}
