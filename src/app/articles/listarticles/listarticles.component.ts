import { Component } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';
@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent {
  articles : Articles[];
  constructor(private artserv:ArticlesService){}
  ngOnInit(){
      this.Listart();  
  }
  Listart(){
    return this.artserv.getarticles().subscribe(data =>
      this.articles= data),
      (err:any)=>console.log(err)
  }
  supparticle(id:object){
    return this.artserv.Deleteartciles(id).subscribe(data=>{this.Listart()})
  }
  
}
