import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { environment } from "../../../../environments/environment";
import { QuestData } from "../../../@core/backend/interfaces/quest";
import { SpeechDialogComponent } from "../../speeches/edit/speechDialog.component";

@Component({
  templateUrl: "voicesDialog.component.html",
})
export class VoicesDialogComponent implements OnInit {
  loading: boolean = false;
  systemVoice: { voice_name: string; wav: string };
  file: File;
  srcAudio = environment.apiUrl + "/media/";
  constructor(
    public dialogRef: MatDialogRef<VoicesDialogComponent>,
    private service: QuestData,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit() {
    console.log(this.data);
    this.systemVoice = this.data;
  }
  fileOnChange(event) {
    this.file = event.target.files[0];
  }
  cansel(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    this.loading = true;
    if (this.file) {
      const formData = new FormData();
      formData.append("voice_name", this.systemVoice.voice_name);
      formData.append("wav", this.file);
      this.service.uploadSystemVoice(formData).subscribe((res) => {
        this.loading = false;
        this.dialogRef.close(res);
      });
    }
  }
}
