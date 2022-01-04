import { NgModule } from '@angular/core';
import {
  NbActionsModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbFormFieldModule,
  NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbRadioModule, NbSelectModule, NbSpinnerModule,
  NbTabsetModule, NbTooltipModule, NbUserModule,
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
  NbFormFieldModule,
  ReactiveFormsModule,
  FormsModule,
  MatTableModule,
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
