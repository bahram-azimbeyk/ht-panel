import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';
import { Question, QuestData, Speech, AnswerType } from '../../../../@core/backend/interfaces/quest';
import { environment } from '../../../../../environments/environment';
import { FormBuilder } from '@angular/forms';
import { SpeechDialogComponent } from '../../../speeches/edit/speechDialog.component';

@Component({
  templateUrl: 'answer.component.html',
})
export class AnswerComponent implements OnInit {
  loading: boolean = false;
  answerType: AnswerType;
  types: AnswerType[];
  speeches: Speech[];
  speech: Speech;
  searchInp: string;
  srcAudio = environment.apiUrl + '/media/';
  constructor(
    private servise: QuestData,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<AnswerComponent>,
  ) { }
  ngOnInit() {
    this.servise.getAnswerTypes().subscribe(res => {
      this.types = res;
    });
  }

  search() {
    this.searchInp = this.searchInp.trim();
    if (this.searchInp.length > 1) {
      this.servise.getSpeechesList(1, 5, this.searchInp).subscribe(res => {
        this.speeches = res.data;
      });
    }
  }

  onSelectChange(data) {
    if (this.searchInp) {
      this.speech = data;
      this.searchInp = '';
    }
  }
  addSpeech() {
    const dialogRef = this.dialog.open(SpeechDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.speech = result;
      }
    });
  }

  cansel(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    const data = {
      answer_type: this.answerType,
      speech: this.speech || null,
    };

    this.dialogRef.close(data);
  }
}
