import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestApi } from '../api/quest.api';
import { QuestData, Question, QuestionPagination, SpeechPagination } from '../interfaces/quest';

@Injectable()
export class QuestService extends QuestData {

  constructor(private api: QuestApi) {
    super();
  }

  getQuestionsList(pageNumber: number = 1, pageSize: number = 25): Observable<QuestionPagination> {
    return this.api.getQuestionsList(pageNumber, pageSize);
  }

  getQuestion(q_id: number): Observable<Question> {
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

  getAnswerTypes(): Observable<any> {
    return this.api.getAnswerTypes();
  }

  editAnswer(q_id: number, data: any) {
    return this.api.editAnswer(q_id, data);
  }

  getSpeechesList(pageNumber?: number, pageSize?: number, filter?: string): Observable<SpeechPagination> {
    return this.api.getSpeechesList(pageNumber, pageSize, filter);
  }

  createSpeech(speech: any): Observable<any> {
    return this.api.createSpeech(speech);
  }

  editSpeech(speech: any, s_id: number): Observable<any> {
    return this.api.editSpeech(speech, s_id);
  }

  deleteSpeech(s_id: number): Observable<any> {
    return this.api.deleteSpeech(s_id);
  }

  restartNlu(): Observable<any> {
    return this.api.restartNlu();
  }

  getSystemVoices(): Observable<any> {
    return this.api.getSystemVoices();
  }

  uploadSystemVoice(systemVoice: any): Observable<any> {
    return this.api.uploadSystemVoice(systemVoice);
  }
}
