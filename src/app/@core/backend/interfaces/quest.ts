import { Observable } from 'rxjs';

// export interface Setting {
//   key: string;
//   value: string;
//   value_type: string;
// }

export abstract class QuestData {

  abstract getCsv(): Observable<any>;

  abstract updateCsv(file: any): Observable<any>;

}
