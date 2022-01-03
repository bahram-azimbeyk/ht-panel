import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './api/http.service';
import { NbAuthModule } from '@nebular/auth';
import { QuestData } from './interfaces/quest';
import { QuestService } from './services/quest.service';


const API = [HttpService];

const SERVICES = [
  { provide: QuestData, useClass: QuestService },
];

@NgModule({
  imports: [CommonModule, NbAuthModule],
})
export class BackendModule {
  static forRoot(): ModuleWithProviders<BackendModule> {
    return {
      ngModule: BackendModule,
      providers: [
        ...API,
        ...SERVICES,
      ],
    };
  }
}
