import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlashFormDTO } from 'src/app/models/Flashform';


@Component({
  selector: 'app-flashquote-form',
  templateUrl: './flashquoteForm.component.html',
  styleUrls: ['./flashquoteForm.component.css']
})
export class FlashquoteFormComponent implements OnInit {
  @Input() flashFormDTO: FlashFormDTO
  form: FormGroup
  questionTypes: { [key: string]: { type: string } };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({})
    this.flashFormDTO.questions.forEach(question => {
      this.form.addControl(question.id.toString(), this.fb.control(''))
      this.questionTypes = { ...this.questionTypes, [question.id]: { type: question.type } }
    })
  }

  onSubmit() {
    console.log('form value', this.form.value)
  }
}
