import { NgModule } from '@angular/core';
import {
  NbActionsModule, NbAutocompleteModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule,
  NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbRadioModule, NbSelectModule, NbSpinnerModule,
  NbTabsetModule, NbTagModule, NbTooltipModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { QuestionsModule } from './questions/questions.module';
import { SettingsModule } from './settings/settings.module';
import { TestModule } from './test/test.module';
import { SpeechesModule } from './speeches/speeches.module';
import { MatDialogModule } from '@angular/material/dialog';

const NB_MODULES = [

  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbDatepickerModule,
  NbInputModule,
  NbTooltipModule,
  NbTagModule,
  NbDialogModule,
  NbFormFieldModule,
  NbAutocompleteModule,
  ReactiveFormsModule,
  FormsModule,
  MatTableModule,
  MatDialogModule,
  CommonModule,
];
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NB_MODULES,
  ],
  declarations: [
    PagesComponent,
  ],
  exports: [NB_MODULES],
})
export class PagesModule {
}
