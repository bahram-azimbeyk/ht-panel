import { NgModule } from '@angular/core';
import { SpeechesComponent } from './speeches.component';
import { PagesModule } from '../pages.module';
import { CommonModule } from '@angular/common';
import { SpeechDialogComponent } from './edit/speechDialog.component';

@NgModule({
  imports: [
    PagesModule,
    CommonModule,
  ],
  declarations: [
    SpeechesComponent,
    SpeechDialogComponent,
  ],
})
export class SpeechesModule {
}
