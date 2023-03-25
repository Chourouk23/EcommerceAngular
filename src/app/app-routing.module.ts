import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { ListarticletableComponent } from './articles/listarticletable/listarticletable.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';
import { InsertcategorieComponent } from './categories/insertcategorie/insertcategorie.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { ModifcategorieComponent } from './categories/modifcategorie/modifcategorie.component';
import { ListscategorieComponent } from './scategorie/listscategorie/listscategorie.component';
import { ModifscategorieComponent } from './scategorie/modifscategorie/modifscategorie.component';

const routes: Routes = [
  {path:"larticles", component: ListarticlesComponent},
  {path : "lartcard", component : ListarticlescardComponent},
  {path : "insertart", component : InsertarticlesComponent},
  {path : "larticletable", component : ListarticletableComponent},
  {path : "modifart/:_id", component : ModifarticlesComponent},
  {path:"lcategories", component: ListcategoriesComponent},
  {path : "insertcat", component : InsertcategorieComponent},
  {path : "modifcat/:_id", component : ModifcategorieComponent},
  {path:"lscategories", component: ListscategorieComponent},
  {path:"modifsouscat/:id", component: ModifscategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
