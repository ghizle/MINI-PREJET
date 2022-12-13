import { Component, OnInit } from '@angular/core';
import { coffee } from '../model/coffee.model';
import { CoffeeService } from '../services/coffee.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Marque } from './../model/marque.model';

@Component({
  selector: 'app-add-coffee',
  templateUrl: './add-coffee.component.html',
  styleUrls: ['./add-coffee.component.css']
})
export class AddCoffeeComponent implements OnInit {
  newcoffee = new coffee();
  marques! : Marque[];
  newIdMar! : number;
  message!: string;
  newMarque!: Marque ;

  constructor(private coffeeservice : CoffeeService,
              private activatedRoute: ActivatedRoute,
              private router :Router) { }

  ngOnInit(): void {
    this.marques = this.coffeeservice.listeMarques();

  }
 addcoffee(){
  //console.log(this.newcoffee)
  this.newMarque =
  this.coffeeservice.consulterMarque(this.newIdMar);
  this.coffeeservice.ajoutercoffee(this.newcoffee);
  this.message= "coffee "+ this.newcoffee.nomcoffee+" ajoute avec succe!";
  this.router.navigate(["coffee"]);

 }
}
