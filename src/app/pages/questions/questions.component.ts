import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { title } from 'process';
import { QuestData, Question } from '../../@core/backend/interfaces/quest';
import { ConfirmDialogComponent } from './confirmDialog/dialog.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'ngx-hoshtel-question',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  displayedColumns: string[] = ['number', 'text', 'keyword', 'edit', 'delete'];
  data: Question[];
  headerList = ['title', 'text', 'keyword', 'file_name'];
  constructor(
    private servise: QuestData,
    private dialog: MatDialog,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.servise.getQuestionsList().subscribe(res => {
      this.data = res.data;
    });
  }

  createQuestion() {
    this.router.navigate(['/questions/create']);
  }

  edit(row: Question) {
    // const dialogRef = this.dialog.open(EditComponent, {
    //   data: { body: JSON.parse(JSON.stringify(row)) },
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   this.getData();
    // });
    this.router.navigate(['/questions/detail'], { queryParams: { id: row.id } });
  }

  delete(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.servise.deleteQuestion(id).subscribe(res => {
          this.getData();
        });
      }
    });
  }



}
