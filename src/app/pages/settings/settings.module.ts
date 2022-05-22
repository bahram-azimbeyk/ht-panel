import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { PagesModule } from '../pages.module';
import { CommonModule } from '@angular/common';
import { VoicesDialogComponent } from './voices_dialog/voicesDialog.component';

@NgModule({
  imports: [
    PagesModule,
    CommonModule,
  ],
  declarations: [
    SettingsComponent,
    VoicesDialogComponent,
  ],
})
export class SettingsModule {
}
