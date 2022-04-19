import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { Papa } from 'ngx-papaparse';
import { HttpParams } from '@angular/common/http';
import { AnswerType, Question, Speech } from '../interfaces/quest';

@Injectable({
  providedIn: 'root',
})
export class QuestApi {

  getHeader = { observe: 'response', responseType: 'text' };
  postHeader = { 'Content-Type': 'multipart/form-data', 'accept': 'application/json' };
  constructor(private api: HttpService, private papa: Papa) {
  }

  // questions
  getQuestionsList(pageNumber: number = 1, pageSize: number = 25): Observable<any> {
    const params = new HttpParams()
      .set('page', `${pageNumber}`)
      .set('limit', `${pageSize}`);
    return this.api.get('questions', {
      observe: 'response', params: params,
    }).pipe(map(response => {
      return {
        'data': response.body,
        'total': response.headers.get('x-total-count'),
      };
    },
    ));
  }
  getQuestion(q_id: number): Observable<any> {
    return this.api.get(`question/${q_id}`);
  }
  createQestion(question: Question): Observable<any> {
    return this.api.post('question', question);
  }
  editQuestion(question: Question, q_id: number): Observable<any> {
    return this.api.put(`question/${q_id}`, question);
  }
  deleteQuestion(q_id: number): Observable<any> {
    return this.api.delete(`question/${q_id}`);
  }

  // answer type
  getAnswerTypes(): Observable<AnswerType[]> {
    return this.api.get('answer_types');
  }

  // answer
  editAnswer(q_id: number, data: any): Observable<any> {
    return this.api.put(`question/${q_id}/answerlist`, data);
  }

  // speeches
  getSpeechesList(pageNumber: number = 1, pageSize: number = 25, filter?: string): Observable<any> {
    let params = new HttpParams()
      .set('page', `${pageNumber}`)
      .set('limit', `${pageSize}`);
    if (filter) {
      params = params.set('text', filter);
    }
    return this.api.get('speeches', {
      observe: 'response', params: params,
    }).pipe(map(response => {
      return {
        'data': response.body,
        'total': response.headers.get('x-total-count'),
      };
    },
    ));
  }
  createSpeech(speech: any): Observable<any> {
    return this.api.post(`speech`, speech);
  }
  editSpeech(speech: any, s_id: number): Observable<any> {
    return this.api.put(`speech/${s_id}`, speech);
  }
  deleteSpeech(s_id: number): Observable<any> {
    return this.api.delete(`speech/${s_id}`);
  }

  // nlu
  restartNlu(): Observable<any> {
    return this.api.post(`nlu/restart`, null);
  }

}
