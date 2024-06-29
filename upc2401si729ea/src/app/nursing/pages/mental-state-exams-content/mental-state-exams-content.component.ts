import {Component, OnInit} from '@angular/core';
import {MentalStateExam} from "../../models/mental-state-exam/mental-state-exam.entity";
import {MentalStateExamApiService} from "../../services/mental-state-exam/mental-state-exam-api.service";

@Component({
  selector: 'app-mental-state-exams-content',
  templateUrl: './mental-state-exams-content.component.html',
  styleUrl: './mental-state-exams-content.component.css'
})
export class MentalStateExamsContentComponent implements OnInit {

  exams: MentalStateExam[];

  constructor(private examService: MentalStateExamApiService) {
    this.exams = [];
  }

  /**
   * @summary Here we're going to get all the exams from the API.
   * @author Alex Avila Asto
   */
  ngOnInit(): void {
    this.examService.getAll().subscribe((response: any)  => {
      this.exams = response;
    });
  }
}
