import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeComponent } from './coffee/coffee.component';
import { AddCoffeeComponent } from './add-coffee/add-coffee.component';
import { UpdateCoffeeComponent } from './update-coffee/update-coffee.component';
import { LoginComponent } from './login/login.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';

const routes: Routes = [{path : "coffee", component: CoffeeComponent},
                        {path : "add-coffee", component: AddCoffeeComponent},
                        {path : "updatecoffee/:id", component : UpdateCoffeeComponent},
                        {path: "", redirectTo: "coffee", pathMatch: "full"},
                        {path: 'login', component: LoginComponent},
                        {path: 'app-forbidden', component: ForbiddenComponent},
                        {path: "rechercheParNom", component : RechercheParNomComponent},
                        {path: "rechercheParmarque", component : RechercheParMarqueComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
