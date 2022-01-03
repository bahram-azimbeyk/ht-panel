import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { PagesModule } from '../pages.module';

@NgModule({
  imports: [
    PagesModule
  ],
  declarations: [
    TestComponent,
  ],
})
export class TestModule {
}
