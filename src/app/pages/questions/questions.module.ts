import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions.component';
import { PagesModule } from '../pages.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EditComponent } from './edit/edit.component';
import { ConfirmDialogComponent } from './confirmDialog/dialog.component';

@NgModule({
  imports: [
    PagesModule,
    CommonModule,
  ],
  declarations: [
    QuestionsComponent,
    EditComponent,
    ConfirmDialogComponent,
  ],
})
export class QuestionsModule {
}
