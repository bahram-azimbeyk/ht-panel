import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';
import { Question, QuestData, Speech, AnswerType } from '../../../@core/backend/interfaces/quest';
import { environment } from '../../../../environments/environment';
import { FormBuilder } from '@angular/forms';
import { runInThisContext } from 'vm';

@Component({
  templateUrl: 'speechDialog.component.html',
})
export class SpeechDialogComponent implements OnInit {
  loading: boolean = false;
  speech: Speech;
  file: File;
  srcAudio = environment.apiUrl + '/media/';
  constructor(
    private servise: QuestData,
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<SpeechDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Speech,
  ) { }
  ngOnInit() {
    if (this.data) {
      this.speech = this.data;
    } else {
      this.speech = {
        id: 0,
        text: '',
        wav_path: '',
      };
    }
  }
  fileOnChange(event) {
    this.file = event.target.files[0];
  }

  cansel(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    this.loading = true;
    if (!this.data) {
      const formData = new FormData();
      formData.append('text', this.speech.text);
      formData.append('wav', this.file);
      this, this.servise.createSpeech(formData).subscribe(res => {
        this.loading = false;
        this.dialogRef.close(res);
      });
    } else {
      const formData = new FormData();
      formData.append('text', this.speech.text);
      if (this.file) {
        formData.append('wav', this.file);
      }
      this.servise.editSpeech(formData, this.speech.id).subscribe(res => {
        this.loading = false;
        this.dialogRef.close(res);
      });
    }
  }
}
