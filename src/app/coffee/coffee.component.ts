import { Component, OnInit } from '@angular/core';
import { coffee } from '../model/coffee.model';
import { CoffeeService } from '../services/coffee.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
  coffee: coffee[];

  constructor(private coffeeservice : CoffeeService,
    public authService: AuthService) {
    this.coffee= coffeeservice.listecoffee();
    this.coffeeservice.triercoffee()
   }

  ngOnInit(): void {
  }
  supprimercoffee(coff : coffee){
   // console.log(coff);
   let conf = confirm("Etes-vous sûr ?");
 if (conf)
   this.coffeeservice.supprimercoffee(coff);
  }
}
