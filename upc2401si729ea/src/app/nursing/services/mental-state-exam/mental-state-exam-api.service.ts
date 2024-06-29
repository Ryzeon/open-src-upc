import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/service/base-service";
import {MentalStateExam} from "../../models/mental-state-exam/mental-state-exam.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MentalStateExamApiService extends BaseService<MentalStateExam> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.resourceEndpoint = 'mental-state-exams';
  }
}
