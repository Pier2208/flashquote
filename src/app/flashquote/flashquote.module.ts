import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashquoteFormComponent } from './flashquoteForm/flashquoteForm.component';
import { QuestionComponent } from '../components/question/question.component';
import { QuestionTextComponent } from '../components/question/question-text/question-text.component';
import { QuestionRepartitionComponent } from '../components/question/question-repartition/question-repartition.component';
import { QuestionSelectDialogComponent } from '../components/question/question-select-dialog/question-select-dialog.component';


@NgModule({
  declarations: [
    FlashquoteFormComponent,
    QuestionComponent,
    QuestionTextComponent,
    QuestionRepartitionComponent,
    QuestionSelectDialogComponent
  ],
  exports: [
    FlashquoteFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FlashquoteModule { }
