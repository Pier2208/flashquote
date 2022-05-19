import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.scss']
})
export class QuestionTextComponent implements OnInit {
  @Input() question: Question;
  @Input() type: string;
  @Input() formGroup: FormGroup
  
  constructor() { }

  ngOnInit(): void {
  }

}
