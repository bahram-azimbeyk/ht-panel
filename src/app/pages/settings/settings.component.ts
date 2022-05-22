import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { environment } from "../../../environments/environment";
import { QuestData } from "../../@core/backend/interfaces/quest";
import { VoicesDialogComponent } from "./voices_dialog/voicesDialog.component";

@Component({
  selector: "ngx-hoshtel-question",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {
  loading: boolean = false;
  systemVoices: any[];
  srcAudio = environment.apiUrl + "/media/";
  constructor(
    private servise: QuestData,
    private dialog: MatDialog,
    private service: QuestData
  ) {}
  ngOnInit() {
    this.refreshData();
  }
  refreshData() {
    this.service.getSystemVoices().subscribe((systemVoices) => {
      this.systemVoices = systemVoices;
    });
  }
  editSystemVoice(systemVoice: any) {
    const dialogRef = this.dialog.open(VoicesDialogComponent, {
      data: systemVoice,
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
