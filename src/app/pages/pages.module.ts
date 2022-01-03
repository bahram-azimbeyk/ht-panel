import { NgModule } from '@angular/core';
import {
  NbActionsModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbFormFieldModule,
  NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbRadioModule, NbSelectModule, NbSpinnerModule,
  NbTabsetModule, NbTooltipModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

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
