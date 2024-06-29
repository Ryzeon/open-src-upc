import {Injectable} from '@angular/core';
import {BaseService} from "../../../shared/service/base-service";
import {Examiner} from "../../models/examiner/examiner.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExaminerApiService extends BaseService<Examiner> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.resourceEndpoint = 'examiners';
  }
}
