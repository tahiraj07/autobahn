import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WebcamModel } from 'src/app/models/WebcamModel';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-webcams-details',
  templateUrl: './webcams-details.component.html',
  styleUrls: ['./webcams-details.component.scss']
})
export class WebcamsDetailsComponent {
  id: any;
  webData: WebcamModel;
  active: boolean;
  editForm: FormGroup;
  @Output() refresh = new EventEmitter<void>();
  constructor(
    private main_Service: MainService,
    private dialogRef: MatDialogRef<WebcamsDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public identifier: string) {
    this.id = identifier;
  }
  ngOnInit() {
    this.getDetails();
    this.active = true;
    this.editForm.disable();
  }

  getDetails() {
    this.main_Service.getWebsDetail(this.id).subscribe((data: WebcamModel) => {
      this.webData = data;
    });
  }
}
