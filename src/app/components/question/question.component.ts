import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
@Input() question: Question
@Input() questionType: string
@Input() formGroup: FormGroup

  constructor() { }

  ngOnInit(): void {
    console.log(this.question)

  }
}
