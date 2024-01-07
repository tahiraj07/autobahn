import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WarningModel } from 'src/app/models/WarningModel';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-warning-details',
  templateUrl: './warning-details.component.html',
  styleUrls: ['./warning-details.component.scss']
})
export class WarningDetailsComponent {
  id: any;
  data: WarningModel;
  active: boolean;
  editForm: FormGroup;
  @Output() refresh = new EventEmitter<void>();
  constructor(
    private main_Service: MainService,
    private dialogRef: MatDialogRef<WarningDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public identifier: string) {
    this.id = identifier;
  }
  ngOnInit() {
    this.getDetails();
    this.active = true;
    this.editForm.disable();
  }

  getDetails() {
    this.main_Service.getWarningDetail(this.id).subscribe((data: WarningModel) => {
      this.data = data;
    });
  }
}
