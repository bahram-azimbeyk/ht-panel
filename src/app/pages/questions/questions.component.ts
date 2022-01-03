import { Component, OnInit } from '@angular/core';
import { QuestData } from '../../@core/backend/interfaces/quest';

@Component({
  selector: 'ngx-hoshtel-question',
  templateUrl: './questions.component.html',
})
export class QuestionsComponent implements OnInit {
  constructor(
    private servise: QuestData,
  ) { }
  ngOnInit(): void {
    this.servise.getCsv().subscribe(res => {
      console.log(res);
    });
  }

}
