import { Component, OnInit } from '@angular/core';
import { coffee } from '../model/coffee.model';
import { Marque } from '../model/marque.model';
import { CoffeeService } from '../services/coffee.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  coffee! : coffee[];
  idMar! : number;
  marques! : Marque[];
  allcoffee! : coffee[];

  
  constructor(private AuthService :AuthService,
    private CoffeeService : CoffeeService) { }

  ngOnInit(): void {
    this.allcoffee=this.CoffeeService.listecoffee();
  }
  onKeyUp(filterText : string){
    console.log(filterText);
    this.coffee = this.allcoffee.filter(item => item.nomcoffee?.toLowerCase().includes(filterText));
    }

}
