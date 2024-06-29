import {Component, Input, OnInit} from '@angular/core';
import {Joke} from "../../model/joke.entity";
import {JokesApiService} from "../../service/jokes-api.service";

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrl: './joke-card.component.css'
})
export class JokeCardComponent implements OnInit {

  @Input() category: string = '';

  constructor(private jokesApi: JokesApiService) {
  }

  joke: Joke = new Joke();

  ngOnInit(): void {
    this.jokesApi.getRandomJokeByCategory(this.category).subscribe((data: any) => {
      this.joke = data;
      console.log(this.joke);
    });
  }
}
