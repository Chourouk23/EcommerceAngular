import { Component } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';
@Component({
  selector: 'app-listarticletable',
  templateUrl: './listarticletable.component.html',
  styleUrls: ['./listarticletable.component.css']
})
export class ListarticletableComponent {
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
}
