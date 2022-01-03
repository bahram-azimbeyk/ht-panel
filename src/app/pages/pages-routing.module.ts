import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { QuestionsComponent } from './questions/questions.component';
import { TestComponent } from './test/test.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'questions',
      component: QuestionsComponent,
    }, {
      path: 'test',
      component: TestComponent,
    }, {
      path: 'settings',
      component: SettingsComponent,
    }, {
      path: '',
      redirectTo: 'questions',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
