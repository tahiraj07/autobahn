import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoadsModel } from 'src/app/models/RoadsModel';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-roads-details',
  templateUrl: './roads-details.component.html',
  styleUrls: ['./roads-details.component.scss']
})
export class RoadsDetailsComponent {

  id: any;
  roadData: RoadsModel;
  active: boolean;
  editForm: FormGroup;
  @Output() refresh = new EventEmitter<void>();
  constructor(
    private main_Service: MainService,
    private dialogRef: MatDialogRef<RoadsDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public identifier: string) {
    this.id = identifier;
  }
  ngOnInit() {
    this.getDetails();
    this.active = true;
    this.editForm.disable();
  }

  getDetails() {
    this.main_Service.getRoadsDetail(this.id).subscribe((data: RoadsModel) => {
      this.roadData = data;
    });
  }

}
