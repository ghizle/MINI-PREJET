import { Component, OnInit } from '@angular/core';
import { coffee } from '../model/coffee.model';
import { CoffeeService } from '../services/coffee.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Marque } from './../model/marque.model';


@Component({
  selector: 'app-update-coffee',
  templateUrl: './update-coffee.component.html',
  styleUrls: ['./update-coffee.component.css']
})
export class UpdateCoffeeComponent implements OnInit {
  currrentcoffee = new coffee();

  marques! : Marque[];
  updatedMarId! : number;



  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
    this.marques = this.coffeeService.listeMarques();
this.currrentcoffee = this.coffeeService.consultercoffee(this.activatedRoute.snapshot.params['id']);
this.updatedMarId=this.currrentcoffee.marque.idMar;
  }
  updatecoffee(){
    //console.log(this.currrentcoffee);
    this.currrentcoffee.marque=
    this.coffeeService.consultercoffee(this.updatedMarId);

    this.coffeeService.updatecoffee(this.currrentcoffee);
    this.router.navigate(["coffee"]);
  }

}
