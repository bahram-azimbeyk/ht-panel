import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { title } from 'process';
import { QuestData } from '../../@core/backend/interfaces/quest';
import { ConfirmDialogComponent } from './confirmDialog/dialog.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'ngx-hoshtel-question',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  displayedColumns: string[] = ['number', 'title', 'text', 'keyword', 'file', 'edit', 'delete'];
  data: any[];
  headerList = ['title', 'text', 'keyword', 'file_name'];
  constructor(
    private servise: QuestData,
    private dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.servise.getCsv().subscribe(res => {
      this.data = res;
    });
  }

  addQuestion() {
    const dialogRef = this.dialog.open(EditComponent, {
      data: {
        body: {
          title: '',
          text: '',
          keyword: '',
          file_name: '',
        }, title: 'تعریف سوال',
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data.push(result);
        this.uploadCsv();
      }
    });
  }

  edit(i: number) {
    const dialogRef = this.dialog.open(EditComponent, {
      data: { body: this.data[i] },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data[i] = result;
        this.uploadCsv();
      }
    });
  }

  delete(i: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data.splice(i, 1);
        this.uploadCsv();
      }
    });
  }

  uploadCsv() {
    this.servise.updateCsv(this.ConvertToCSV(this.data, this.headerList)).subscribe(res => {
      this.getData();
    });
  }

  ConvertToCSV(objArray, headerList) {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    // tslint:disable-next-line: forin
    for (const index in headerList) {
      str += headerList[index] + ',';
    }
    str = str.slice(0, -1);
    str += '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = array[i][headerList[0]];
      // tslint:disable-next-line: forin
      for (const index in headerList) {
        if (headerList[index] !== headerList[0]) {
          const head = headerList[index];
          if (array[i][head] !== undefined) {
            if (head === 'keyword') {
              line += `,"${array[i][head]}"`;
            } else {
              line += ',' + array[i][head];
            }
          } else {
            line += ',';
          }
        }
      }
      if (i !== array.length - 1) {
        str += line + '\r\n';
      } else {
        str += line;
      }
    }
    const blob = new Blob(['\ufeff' + str], { type: 'text/csv;charset=utf-8;' });
    const file = new File([blob], 'info.csv', { type: 'text/csv' });
    const formData = new FormData();
    formData.append('csv_file', file);
    return formData;
  }
}
