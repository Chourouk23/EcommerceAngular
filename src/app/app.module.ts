import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { InsertcategorieComponent } from './categories/insertcategorie/insertcategorie.component';
import { ModifcategorieComponent } from './categories/modifcategorie/modifcategorie.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';
import { ListscategorieComponent } from './scategorie/listscategorie/listscategorie.component';
import { InsertscategorieComponent } from './scategorie/insertscategorie/insertscategorie.component';
import { ModifscategorieComponent } from './scategorie/modifscategorie/modifscategorie.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ListarticletableComponent } from './articles/listarticletable/listarticletable.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListcategoriesComponent,
    InsertcategorieComponent,
    ModifcategorieComponent,
    ListarticlesComponent,
    InsertarticlesComponent,
    ModifarticlesComponent,
    ListscategorieComponent,
    InsertscategorieComponent,
    ModifscategorieComponent,
    ListarticlescardComponent,
    ListarticletableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
