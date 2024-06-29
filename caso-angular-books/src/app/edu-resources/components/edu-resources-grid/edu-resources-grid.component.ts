import {Component, OnInit} from '@angular/core';
import {EduApiService} from "../../service/edu-api.service";
import {EduResource} from "../../model/edu-resource.entity";

@Component({
  selector: 'app-edu-resources-grid',
  templateUrl: './edu-resources-grid.component.html',
  styleUrl: './edu-resources-grid.component.css'
})
export class EduResourcesGridComponent implements OnInit {

  resources: Array<EduResource> = [];

  constructor(private eduApi: EduApiService) {
  }

  ngOnInit(): void {
    this.eduApi.getEduResources().subscribe((data: any) => {
      this.resources = data['results'];
    });
  }

}
