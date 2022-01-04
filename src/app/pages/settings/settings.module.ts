import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { PagesModule } from '../pages.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    PagesModule,
    CommonModule,
  ],
  declarations: [
    SettingsComponent,
  ],
})
export class SettingsModule {
}
