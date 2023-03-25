import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scategories } from 'src/app/models/scategories';
import { ScategoriesService } from 'src/app/services/scategories.service';

@Component({
  selector: 'app-modifscategorie',
  templateUrl: './modifscategorie.component.html',
  styleUrls: ['./modifscategorie.component.css']
})
export class ModifscategorieComponent {
  souscat : Scategories = new Scategories;
  id : Object;
  constructor(private scatserv : ScategoriesService,private route : ActivatedRoute, private router : Router){}
  ngOnInit(){
this.id =this.route.snapshot.params['id'];
  this.scatserv.GetSouscat(this.id).subscribe(data=>{this.souscat=data})
}
modifsouscat(){
  return this.scatserv.updatesousCat(this.id,this.souscat).subscribe(data => this.router.navigate(['lscategories']))
}
  }

