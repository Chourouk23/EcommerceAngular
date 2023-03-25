import { Component } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-modifcategorie',
  templateUrl: './modifcategorie.component.html',
  styleUrls: ['./modifcategorie.component.css']
})
export class ModifcategorieComponent {
  categorie : Categories;
  id : Object ;
  constructor(private catserv: CategoriesService,private route : ActivatedRoute,private router:Router){}
  ngOnInit(){
    this.id =this.route.snapshot.params['_id'];
    this.catserv.GetCategorie(this.id).subscribe(data=>(this.categorie=data))
  }
modifcat(){
  return this.catserv.updateCat(this.id,this.categorie).subscribe(data=>this.router.navigate(['lscategories']))
}
}
