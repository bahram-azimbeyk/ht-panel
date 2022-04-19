import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
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

  length: number;
  pageIndex: number = 0;
  pageLimit: number = 50;
  limit: string = '25';
  isLoading: boolean = false;
  pageEvent: PageEvent = { pageSize: 25, pageIndex: 0, length: 25 };

  constructor(
    private servise: QuestData,
    private dialog: MatDialog,
    private router: Router) { }
  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.pageLimit = Number(this.limit);
    this.isLoading = true;
    this.pageIndex = this.pageEvent?.pageIndex || 0;
    this.servise.getSpeechesList(this.pageIndex + 1, this.pageLimit).subscribe(res => {
      this.data = res.data;
      this.length = res.total;
      this.isLoading = false;
    });
  }

  createSpeech() {
    const dialogRef = this.dialog.open(SpeechDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshData();
      }
    });

  }
  edit(row: Speech) {
    const dialogRef = this.dialog.open(SpeechDialogComponent, { data: JSON.parse(JSON.stringify(row)) });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refreshData();
      }
    });
  }

  delete(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.servise.deleteSpeech(id).subscribe(res => {
          this.refreshData();
        });
      }
    });
  }
}
