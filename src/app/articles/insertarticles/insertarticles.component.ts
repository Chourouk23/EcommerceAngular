import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Articles } from 'src/app/models/articles';
import { Router } from '@angular/router';
import { ScategoriesService } from 'src/app/services/scategories.service';
import { Scategories } from 'src/app/models/scategories';
@Component({
  selector: 'app-insertarticles',
  templateUrl: './insertarticles.component.html',
  styleUrls: ['./insertarticles.component.css']
})
export class InsertarticlesComponent {
article : Articles = new Articles;
scategorie : Scategories[];
constructor(private artserv : ArticlesService,private router:Router, private scatserv : ScategoriesService){}
ngOnInit(){
  this.loadscategorie()
}
loadscategorie(){
  return this.scatserv.Listcategories().subscribe(data =>
    this.scategorie= data),
    (err:any)=>console.log(err)
    }
Ajoutarticle(){
  return this.artserv.addarticles(this.article).subscribe(data=>this.router.navigate(['larticles']))
}
}
