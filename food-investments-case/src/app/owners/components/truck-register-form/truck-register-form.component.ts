import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Truck} from "../../models/truck-entity";
import {NgForm} from "@angular/forms";
import {FoodTruckService} from "../../services/food-truck.service";

@Component({
  selector: 'app-truck-register-form',
  templateUrl: './truck-register-form.component.html',
  styleUrl: './truck-register-form.component.css'
})
export class TruckRegisterFormComponent {

  @Output() truckRegistered = new EventEmitter<Truck>();
  @ViewChild('truckForm', {static: false}) truckForm!: NgForm;
  truck: Truck;

  constructor(private foodTruckService: FoodTruckService) {
    this.truck = {} as Truck;
  }

  onSubmit() {
    if (this.truckForm.form.valid) {
      const email = this.truck.email;
      const brandName = this.truck.brandName;
      this.foodTruckService.getTruckByBrandNameAndEmail(brandName, email).subscribe((trucks: any) => {
        if (trucks.length > 0) {
          alert('Truck with same brand name and email already exists');
        } else {
          this.truckRegistered.emit(this.truck);
          this.truck = {} as Truck;
          this.truckForm.reset();
        }
      });
    }
  }
}
