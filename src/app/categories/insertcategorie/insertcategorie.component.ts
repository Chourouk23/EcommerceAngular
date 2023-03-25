import { Component } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insertcategorie',
  templateUrl: './insertcategorie.component.html',
  styleUrls: ['./insertcategorie.component.css']
})
export class InsertcategorieComponent {
categorie = new Categories;
constructor(private catserv : CategoriesService,private router : Router){}
ajoutCat(){
  return this.catserv.Addcategorie(this.categorie).subscribe(data=>this.router.navigate(['/lcategories']))
}

}
