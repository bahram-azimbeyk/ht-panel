import { Injectable, NgModule } from '@angular/core';
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
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';

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
  MatPaginatorModule,
  CommonModule,
];
@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = 'صفحه اول';
  itemsPerPageLabel = 'تعداد نمایش در صفحه';
  lastPageLabel = 'صفحه آخر';
  nextPageLabel = 'صفحه بعد';
  previousPageLabel = 'صفحه قبل';
  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return 'صفحه 1 از 1';
    }
    const amountPages = Math.ceil(length / pageSize);
    return `صفحه ${page + 1} از ${amountPages}`;
  }
}

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
  providers: [
    { provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl },
  ],
})
export class PagesModule {
}
