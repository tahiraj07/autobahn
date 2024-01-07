import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MainService } from 'src/app/shared/services/main.service';
import { ChargingStationModel } from 'src/app/models/CharginStationModel';

@Component({
  selector: 'app-electric-details',
  templateUrl: './electric-details.component.html',
  styleUrls: ['./electric-details.component.scss']
})
export class ElectricDetailsComponent {
  id: any;
  data: ChargingStationModel;
  active: boolean;
  editForm: FormGroup;
  @Output() refresh = new EventEmitter<void>();
  constructor(
    private main_Service: MainService,
    private dialogRef: MatDialogRef<ElectricDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public identifier: string) {
    this.id = identifier;
  }
  ngOnInit() {
    this.getDetails();
    this.active = true;
    this.editForm.disable();
  }

  getDetails() {
    this.main_Service.getElectricDetail(this.id).subscribe((data: ChargingStationModel) => {
      this.data = data;
    });
  }
}
