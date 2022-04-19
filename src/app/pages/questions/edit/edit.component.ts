import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';
import { Question, QuestData, Speech } from '../../../@core/backend/interfaces/quest';
import { environment } from '../../../../environments/environment';
import { AnswerComponent } from './answerDialog/answer.component';

@Component({
  templateUrl: 'edit.component.html',
})
export class EditComponent implements OnInit {
  stepOne: boolean = true;
  keyword = [];
  question: Question;
  speeches: Speech[];
  loading: boolean = false;
  srcAudio = environment.apiUrl + '/media/';
  constructor(
    private servise: QuestData,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,

  ) { }
  ngOnInit() {
    this.route.data.subscribe(data => {
      const { mode } = data;
      if (mode === 'create') {
        this.question = {
          text: '',
          keywords: [],
          id: 0,
        };
      }
      if (mode === 'detail') {
        this.loading = true;
        this.route.queryParams.subscribe(params => {
          const { id } = params;
          this.servise.getQuestion(id).subscribe(question => {
            this.question = question;
            this.loading = false;
          });
        });
      }
    });
  }

  onTagRemove(tagToRemove: NbTagComponent): void {
    this.question.keywords = this.question.keywords.filter(tag => tag !== tagToRemove.text);
  }

  onTagAdd({ value, input }: NbTagInputAddEvent): void {
    if (value) {
      this.question.keywords.push(value);
    }
    input.nativeElement.value = '';
  }

  addAnswer() {
    const dialogRef = this.dialog.open(AnswerComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.question.answer_list.answer_parts.push(result);
      }
    });
  }
  shiftAnswer(index: number, direction: string) {
    if (direction === 'upward') {
      if (index === 0) {
        return;
      }
      const temp = this.question.answer_list.answer_parts[index - 1];
      this.question.answer_list.answer_parts[index - 1] = this.question.answer_list.answer_parts[index];
      this.question.answer_list.answer_parts[index] = temp;
    } else if (direction === 'downward') {
      if (index === this.question.answer_list.answer_parts.length - 1) {
        return;
      }
      const temp = this.question.answer_list.answer_parts[index + 1];
      this.question.answer_list.answer_parts[index + 1] = this.question.answer_list.answer_parts[index];
      this.question.answer_list.answer_parts[index] = temp;
    }
  }
  deleteAnswer(index: number) {
    this.question.answer_list.answer_parts.splice(index, 1);
  }

  cansel(): void {
    this.router.navigate(['/questions']);
  }
  onSubmit(): void {
    this.loading = true;
    const data = {
      text: this.question.text,
      keywords: this.question.keywords,
    };
    if (this.question.id) {
      this.servise.editQuestion(data, this.question.id).subscribe(res => {
        const typeId = [];
        const speechId = [];
        this.question.answer_list.answer_parts.forEach(element => {
          typeId.push(element.answer_type.id);
          if (element.answer_type.has_speech) {
            speechId.push(element.speech.id);
          } else {
            speechId.push(null);
          }
        });
        const answerData = {
          answer_parts: [
            typeId, speechId,
          ],
        };
        this.servise.editAnswer(this.question.id, answerData).subscribe(() => {
          this.router.navigate(['/questions']);
        });
      });
    } else {
      this.servise.createQestion(data).subscribe(res => {
        this.question = res;
        this.loading = false;
      });
    }
  }
}
