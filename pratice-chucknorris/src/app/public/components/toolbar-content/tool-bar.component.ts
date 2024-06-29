import {Component, OnInit} from '@angular/core';
import {JokesApiService} from "../../../jokes/service/jokes-api.service";

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent implements OnInit{

  categories: Array<string> = []

  constructor(private jokesApi: JokesApiService) {
  }

  getAllJokes() {
    this.categories = [];
    this.jokesApi.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  ngOnInit(): void {
    this.jokesApi.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
}
