import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {
  routes = [
    { name: 'home', link: '/home' },
    { name: 'mental-state-exams', link: '/nursing/mental-state-exams' },
  ]
}
