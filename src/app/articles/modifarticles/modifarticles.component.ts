import { Component } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifarticles',
  templateUrl: './modifarticles.component.html',
  styleUrls: ['./modifarticles.component.css']
})
export class ModifarticlesComponent {
  article : Articles;
  id : Object;
  constructor(private artserv : ArticlesService,private route : ActivatedRoute,private router:Router){}
ngOnInit(){
  this.id =this.route.snapshot.params['_id'];
  this.artserv.GetArticle(this.id).subscribe(data=>{this.article=data})
}
modifArticle(){
  return this.artserv.updateArticle(this.id,this.article).subscribe(data => this.router.navigate(['larticles']))
}
}
