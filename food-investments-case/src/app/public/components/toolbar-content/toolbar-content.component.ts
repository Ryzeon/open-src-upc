import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {
  options = [
    { name: 'Home', link: '/home' },
    { name: 'Register Food Truck', link: '/owners/food-trucks/new' },
  ]
}
