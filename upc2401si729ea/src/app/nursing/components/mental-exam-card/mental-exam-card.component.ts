import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Patient} from "../../models/patient/patient.entity";
import {Examiner} from "../../models/examiner/examiner.entity";
import {ExaminerApiService} from "../../services/examiner/examiner-api.service";
import {PatientApiService} from "../../services/patient/patient-api.service";
import {MentalStateExam} from "../../models/mental-state-exam/mental-state-exam.entity";

@Component({
  selector: 'app-mental-exam-card',
  templateUrl: './mental-exam-card.component.html',
  styleUrl: './mental-exam-card.component.css'
})
export class MentalExamCardComponent implements OnInit {

  @Input() exam: MentalStateExam;

  patient: Patient;
  examiner: Examiner;
  totalScore: number;

  /**
   *
   * @param patientApi
   * @param examinerApi
   * @author Alex Avila Asto
   * @summary We are injecting the PatientApiService and ExaminerApiService services into the constructor.
   */
  constructor(private patientApi: PatientApiService, private examinerApi: ExaminerApiService) {
    this.exam = {} as MentalStateExam;
    this.patient = {} as Patient;
    this.examiner = {} as Examiner;
    this.totalScore = 0;
  }

  /**
   * @summary Here we're going to get the patient and examiner data from the API using exam.patientId and exam.examinerId.
   * @author Alex Avila Asto
   */
  ngOnInit(): void {
    this.patientApi.get(this.exam.patientId).subscribe((patient) => {
      this.patient = patient;
    });

    this.examinerApi.get(this.exam.examinerId).subscribe((examiner) => {
      this.examiner = examiner;
    });
    this.totalScore = this.exam.orientationScore + this.exam.registrationScore + this.exam.attentionAndCalculationScore + this.exam.recallScore + this.exam.languageScore;
  }

}
