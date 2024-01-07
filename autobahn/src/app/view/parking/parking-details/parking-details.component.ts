import { ParkingModel } from 'src/app/models/ParkingModel';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.component.html',
  styleUrls: ['./parking-details.component.scss']
})
export class ParkingDetailsComponent {
  id: any;
  data: ParkingModel;
  active: boolean;
  editForm: FormGroup;
  @Output() refresh = new EventEmitter<void>();
  constructor(
    private main_Service: MainService,
    private dialogRef: MatDialogRef<ParkingDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public identifier: string) {
    this.id = identifier;
  }
  ngOnInit() {
    this.getDetails();
    this.active = true;
    this.editForm.disable();
  }

  getDetails() {
    this.main_Service.getParkingDetail(this.id).subscribe((data: ParkingModel) => {
      this.data = data;
    });
  }
}
