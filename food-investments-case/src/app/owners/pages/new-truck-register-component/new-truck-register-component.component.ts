import {Component} from '@angular/core';
import {FoodTruckService} from "../../services/food-truck.service";
import {Truck} from "../../models/truck-entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-truck-register-component',
  templateUrl: './new-truck-register-component.component.html',
  styleUrl: './new-truck-register-component.component.css'
})
export class NewTruckRegisterComponentComponent {

  constructor(private foodTruckService: FoodTruckService, private router: Router) {
  }

  onTruckCreated(truck: Truck) {
    this.foodTruckService.create(truck).subscribe(() => {
      alert('Truck registered successfully' + '\n' + 'Click OK to continue');
      this.router.navigate(['/home']);
    });
  }
}
