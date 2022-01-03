import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { PagesModule } from '../pages.module';

@NgModule({
  imports: [
    PagesModule
  ],
  declarations: [
    SettingsComponent,
  ],
})
export class SettingsModule {
}
