import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions.component';
import { PagesModule } from '../pages.module';

@NgModule({
  imports: [
    PagesModule
  ],
  declarations: [
    QuestionsComponent,
  ],
})
export class QuestionsModule {
}
