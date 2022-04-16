import { Observable } from 'rxjs';

export interface Question {
  text: string;
  keywords: string[];
}

export interface Speech {
  text: string;
  order: number;
  type: string;
  id?: number;
  question_id: number;
  wav_path: string;
}
export interface FullQuestion extends Question {
  id: number;
  speeches: Speech[];
}

export interface QuestionPagination {
  data: FullQuestion[];
  total: number;
}

export abstract class QuestData {

  abstract getQuestionsList(pageNumber?: number, pageSize?: number): Observable<QuestionPagination>;

  abstract getQuestion(q_id: number): Observable<FullQuestion>;

  abstract createQestion(question: Question): Observable<FullQuestion>;

  abstract editQuestion(question: Question, q_id: number): Observable<FullQuestion>;

  abstract deleteQuestion(q_id: number): Observable<any>;

  abstract createSpeech(speech: any, q_id: number): Observable<Speech>;

  abstract editSpeech(speech: any, s_id: number): Observable<Speech>;

  abstract deleteSpeech(s_id: number): Observable<any>;

}
