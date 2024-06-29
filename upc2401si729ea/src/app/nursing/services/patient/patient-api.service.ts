import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/service/base-service";
import {Patient} from "../../models/patient/patient.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientApiService extends BaseService<Patient> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.resourceEndpoint = 'patients';
  }
}
