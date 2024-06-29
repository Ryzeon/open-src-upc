import {Component, Input} from '@angular/core';
import {EduResource} from "../../model/edu-resource.entity";

@Component({
  selector: 'app-edu-resources-card',
  templateUrl: './edu-resources-card.component.html',
  styleUrl: './edu-resources-card.component.css'
})
export class EduResourcesCardComponent {
  @Input() resource: EduResource = new EduResource();
}
