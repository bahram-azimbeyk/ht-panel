import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestApi } from '../api/quest.api';
import { FullQuestion, QuestData, Question, QuestionPagination } from '../interfaces/quest';

@Injectable()
export class QuestService extends QuestData {

  constructor(private api: QuestApi) {
    super();
  }

  getQuestionsList(pageNumber: number = 1, pageSize: number = 25): Observable<QuestionPagination> {
    return this.api.getQuestionsList(pageNumber, pageSize);
  }

  getQuestion(q_id: number): Observable<FullQuestion> {
    return this.api.getQuestion(q_id);
  }

  createQestion(question: Question): Observable<any> {
    return this.api.createQestion(question);
  }

  editQuestion(question: Question, q_id: number): Observable<any> {
    return this.api.editQuestion(question, q_id);
  }

  deleteQuestion(q_id: number): Observable<any> {
    return this.api.deleteQuestion(q_id);
  }

  createSpeech(speech: any, q_id: number): Observable<any> {
    return this.api.createSpeech(speech, q_id);
  }

  editSpeech(speech: any, s_id: number): Observable<any> {
    return this.api.editSpeech(speech, s_id);
  }

  deleteSpeech(s_id: number): Observable<any> {
    return this.api.deleteSpeech(s_id);
  }

}
