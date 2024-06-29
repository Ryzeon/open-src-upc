import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EduApiService {

  baseUrl = 'https://learning.oreilly.com/api/v2/search/?query=angular&formats=book&formats=video';

  constructor(private http: HttpClient) {
  }

  getEduResources() {
    return this.http.get(this.baseUrl);
  }
}
