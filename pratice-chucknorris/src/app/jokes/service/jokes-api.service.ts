import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JokesApiService {

  baseUrl = "https://api.chucknorris.io";

  constructor(private http: HttpClient) {
  }

  getCategories() {
    return this.http.get(`${this.baseUrl}/jokes/categories`);
  }

  getRandomJokeByCategory(category: string) {
    return this.http.get(`${this.baseUrl}/jokes/random?category=${category}`);
  }
}
