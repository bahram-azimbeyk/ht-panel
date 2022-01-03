import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class QuestApi {
  csvToJSON(csv) {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentline = lines[i].split(',');
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return result;
  }

  header = { observe: 'response', responseType: 'text' };
  constructor(private api: HttpService) {
  }
  getCsv(): Observable<any> {
    return this.api.get('get_csv', this.header).pipe(map(response => this.csvToJSON(response.body)));
  }
  updateCsv(file: any): Observable<any> {
    return this.api.post('upload', file);
  }
}
