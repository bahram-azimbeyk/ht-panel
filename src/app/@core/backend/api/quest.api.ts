import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { Papa } from 'ngx-papaparse';

@Injectable({
  providedIn: 'root',
})
export class QuestApi {
  csvToJSON(csv) {
    const res = [];
    this.papa.parse(csv, {
      complete: (result) => {
        const headers = [];
        result.data[0].forEach(line => {
          headers.push(line);
        });
        for (let i = 1; i < result.data.length; i++) {
          const obj = {};
          for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = result.data[i][j];
          }
          res.push(obj);
        }
      },
    });
    return res;
  }

  getHeader = { observe: 'response', responseType: 'text' };
  postHeader = { 'Content-Type': 'multipart/form-data', 'accept': 'application/json' };
  constructor(private api: HttpService, private papa: Papa) {
  }
  getCsv(): Observable<any> {
    return this.api.get('get_csv', this.getHeader).pipe(map(response => this.csvToJSON(response.body)));
  }
  updateCsv(file: any): Observable<any> {
    return this.api.post('upload', file, this.postHeader);
  }
}
