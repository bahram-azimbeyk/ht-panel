import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'questions',
      component: QuestionsComponent,
    }, {
      path: 'test',
      component: ECommerceComponent,
    }, {
      path: 'settings',
      component: ECommerceComponent,
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
