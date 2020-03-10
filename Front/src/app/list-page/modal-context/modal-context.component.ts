import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-modal-context',
  templateUrl: './modal-context.component.html',
  styleUrls: ['./modal-context.component.scss']
})
export class ModalContextComponent {

  constructor(public dialogRef: MatDialogRef<ModalContextComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
