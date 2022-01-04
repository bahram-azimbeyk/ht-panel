import { Component, OnInit } from '@angular/core';
import { QuestData } from '../../@core/backend/interfaces/quest';

@Component({
  selector: 'ngx-hoshtel-question',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  displayedColumns: string[] = ['number', 'title', 'text', 'keyword', 'file', 'edit'];
  data: any[];
  constructor(
    private servise: QuestData,
  ) { }
  ngOnInit(): void {
    this.servise.getCsv().subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }

}
