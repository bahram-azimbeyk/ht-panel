import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';
import { FullQuestion, QuestData, Speech } from '../../../@core/backend/interfaces/quest';

@Component({
  templateUrl: 'edit.component.html',
})
export class EditComponent implements OnInit {
  stepOne: boolean = true;
  keyword = [];
  question: FullQuestion;
  speeches: Speech[];
  constructor(
    private servise: QuestData,
    private route: ActivatedRoute,
    private router: Router,

  ) { }
  ngOnInit() {
    this.route.data.subscribe(data => {
      const { mode } = data;
      if (mode === 'create') {
        this.question = {
          text: '',
          keywords: [],
          id: 0,
          speeches: [],
        };
      }
      if (mode === 'detail') {
        this.route.queryParams.subscribe(params => {
          const { id } = params;
          this.servise.getQuestion(id).subscribe(question => {
            this.question = question;
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

  cansel(): void {
    // this.dialogRef.close();
  }
  onSubmit(): void {
    const data = {
      text: this.question.text,
      keywords: this.question.keywords,
    }
    if (this.question.id) {
      this.servise.editQuestion(data, this.question.id).subscribe(res => {
        // this.dialogRef.close(res);
      });
    } else {
      this.servise.createQestion(data).subscribe(res => {
        this.question = res;
      });
    }
  }
}
