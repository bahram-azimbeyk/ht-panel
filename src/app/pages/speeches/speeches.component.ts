import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { QuestData, Speech } from '../../@core/backend/interfaces/quest';
import { ConfirmDialogComponent } from '../questions/confirmDialog/dialog.component';
import { SpeechDialogComponent } from './edit/speechDialog.component';

@Component({
  selector: 'ngx-hoshtel-speeches',
  templateUrl: './speeches.component.html',
  styleUrls: ['./speeches.component.scss'],
})
export class SpeechesComponent implements OnInit {

  displayedColumns: string[] = ['number', 'text', 'wav', 'edit', 'delete'];
  data: Speech[];
  srcAudio = environment.apiUrl + '/media/';

  constructor(
    private servise: QuestData,
    private dialog: MatDialog,
    private router: Router) { }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.servise.getSpeechesList().subscribe(res => {
      this.data = res.data;
    });
  }

  createSpeech() {
    const dialogRef = this.dialog.open(SpeechDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getData();
      }
    });

  }
  edit(row: Speech) {
    const dialogRef = this.dialog.open(SpeechDialogComponent, { data: JSON.parse(JSON.stringify(row)) });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getData();
      }
    });
  }

  delete(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.servise.deleteSpeech(id).subscribe(res => {
          this.getData();
        });
      }
    });
  }
}
