import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-jokes-grid',
  templateUrl: './jokes-grid.component.html',
  styleUrl: './jokes-grid.component.css'
})
export class JokesGridComponent {

  @Input() categories: Array<string> = [];
}
