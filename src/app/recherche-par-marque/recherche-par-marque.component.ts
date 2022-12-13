import { Component, OnInit } from '@angular/core';
import { coffee } from '../model/coffee.model';
import { Marque } from '../model/marque.model';
import { CoffeeService } from '../services/coffee.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styleUrls: ['./recherche-par-marque.component.css']
})
export class RechercheParMarqueComponent implements OnInit {
  coffee : coffee[] =[];
  marques! : Marque[];
  IdMarque! : number;
  supprimercoffee(_t12 : any){
    throw new Error('Method not implemented.');
  }
  authService: any;

  constructor(public AuthService:AuthService,
    private CoffeeService:CoffeeService) { }

  ngOnInit(): void {
    this.marques=this.CoffeeService.listeMarques()
  }
  onChange() {
    this.coffee=this.CoffeeService.rechercherParMarque(this.IdMarque);
    }
}
