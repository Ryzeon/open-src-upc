import {AfterViewInit, Component} from '@angular/core';
import {FoodTruckService} from "../../../owners/services/food-truck.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  trackCount: number;

  constructor(private foodTruckService: FoodTruckService) {
    this.trackCount = 0;
  }

  getCount() {
    this.foodTruckService.getAll().subscribe((trucks: any) => {
      this.trackCount = trucks.length;
    });
  }

  ngAfterViewInit(): void {
    console.log('HomeComponent.ngAfterViewInit')
    this.getCount();
  }
}
