import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { AddCoffeeComponent } from './add-coffee/add-coffee.component';
import { FormsModule } from '@angular/forms';
import { UpdateCoffeeComponent } from './update-coffee/update-coffee.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    AddCoffeeComponent,
    UpdateCoffeeComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParCategorieComponent,
    RechercheParNomComponent,
    RechercheParMarqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
