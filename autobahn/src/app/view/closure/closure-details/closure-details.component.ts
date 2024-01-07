import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MainService } from 'src/app/shared/services/main.service';
import { RoadClosureModel } from 'src/app/models/ClosureModel';

@Component({
  selector: 'app-closure-details',
  templateUrl: './closure-details.component.html',
  styleUrls: ['./closure-details.component.scss']
})
export class ClosureDetailsComponent {
  id: any;
  data: RoadClosureModel;
  active: boolean;
  editForm: FormGroup;
  @Output() refresh = new EventEmitter<void>();
  constructor(
    private main_Service: MainService,
    private dialogRef: MatDialogRef<ClosureDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public identifier: string) {
    this.id = identifier;
  }
  ngOnInit() {
    this.getDetails();
    this.active = true;
    this.editForm.disable();
  }

  getDetails() {
    this.main_Service.getClosureDetail(this.id).subscribe((data: RoadClosureModel) => {
      this.data = data;
    });
  }
}
