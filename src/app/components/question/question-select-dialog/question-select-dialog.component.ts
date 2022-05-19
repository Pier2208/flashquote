import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-question-select-dialog',
  templateUrl: './question-select-dialog.component.html',
  styleUrls: ['./question-select-dialog.component.css']
})
export class QuestionSelectDialogComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
