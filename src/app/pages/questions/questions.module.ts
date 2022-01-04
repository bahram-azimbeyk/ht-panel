import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions.component';
import { PagesModule } from '../pages.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    PagesModule,
    CommonModule,
    // BrowserModule,
  ],
  declarations: [
    QuestionsComponent,
  ],
})
export class QuestionsModule {
}
