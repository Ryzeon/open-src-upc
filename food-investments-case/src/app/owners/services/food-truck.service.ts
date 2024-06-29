import {Injectable} from '@angular/core';
import {BaseService} from "../../shared/service/base-service";
import {Truck} from "../models/truck-entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodTruckService extends BaseService<Truck> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.resourceEndpoint = 'food-trucks';
  }

  getTruckByBrandNameAndEmail(brandName: string, email: string) {
    return this.getFromCustomEndpoint(`food-trucks?brandName=${brandName}&email=${email}`)
  }

}
