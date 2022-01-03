import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestApi } from '../api/quest.api';
import { QuestData } from '../interfaces/quest';

@Injectable()
export class QuestService extends QuestData {

  constructor(private api: QuestApi) {
    super();
  }

  getCsv(): Observable<any> {
    return this.api.getCsv();
  }

  updateCsv(file: any): Observable<any> {
    return this.api.updateCsv(file);
  }


}
