import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';

@Component({
  templateUrl: 'edit.component.html',
})
export class EditComponent implements OnInit {
  stepOne: boolean = true;
  keyword = [];
  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { body: any, title?: string }) { }
  ngOnInit() {
    if (this.data.body.keyword.length) {
      this.keyword = this.data.body.keyword.split(',');
    }
  }

  onTagRemove(tagToRemove: NbTagComponent): void {
    this.keyword = this.keyword.filter(tag => tag !== tagToRemove.text);
  }

  onTagAdd({ value, input }: NbTagInputAddEvent): void {
    if (value) {
      this.keyword.push(value);
    }
    input.nativeElement.value = '';
  }

  cansel(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    const data = {
      ...this.data.body,
    };
    data.keyword = this.keyword.join(',');
    this.dialogRef.close(data);
  }
}
