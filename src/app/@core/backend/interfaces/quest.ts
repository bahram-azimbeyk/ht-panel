import { Observable } from 'rxjs';

export interface Question {
  id?: number;
  text: string;
  keywords: string[];
  answer_list?: {
    answer_parts: Answer[];
  };
}

export interface Speech {
  text: string;
  id: number;
  wav_path: string;
}
export interface AnswerType {
  id: number;
  type: string;
  has_speech: boolean;
}

export interface Answer {
  answer_type: AnswerType;
  speech?: Speech;
}

export interface QuestionPagination {
  data: Question[];
  total: number;
}

export interface SpeechPagination {
  data: Speech[];
  total: number;
}

export abstract class QuestData {

  abstract getQuestionsList(pageNumber?: number, pageSize?: number): Observable<QuestionPagination>;

  abstract getQuestion(q_id: number): Observable<Question>;

  abstract createQestion(question: Question): Observable<Question>;

  abstract editQuestion(question: Question, q_id: number): Observable<Question>;

  abstract deleteQuestion(q_id: number): Observable<any>;

  abstract getAnswerTypes(): Observable<AnswerType[]>;

  abstract editAnswer(q_id: number, data: any): Observable<any>;

  abstract getSpeechesList(pageNumber?: number, pageSize?: number, filter?: string): Observable<SpeechPagination>;

  abstract createSpeech(speech: any): Observable<Speech>;

  abstract editSpeech(speech: any, s_id: number): Observable<Speech>;

  abstract deleteSpeech(s_id: number): Observable<any>;

  abstract restartNlu(): Observable<any>;

}
