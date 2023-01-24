import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-went-well',
  templateUrl: './went-well.component.html',
  styleUrls: ['./went-well.component.css'],
})
export class WentWellComponent implements OnInit {
  public wentWellForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.wentWellForm = fb.group({
      wentWellControls: fb.array([]),
    });
  }

  ngOnInit() {}
  get wentWellControls(): FormArray {
    return this.wentWellForm.get('wentWellControls') as FormArray;
  }
  newWentWellNotes(): FormGroup {
    return this.fb.group({
      wentWell: '',
    });
  }
  removeWentWellNotes(i: number) {
    this.wentWellControls.removeAt(i);
  }
  addwentWellNotes() {
    this.wentWellControls.push(this.newWentWellNotes());
    setTimeout(() => {
      document
        .getElementById(`wentWellNotes${this.wentWellControls.length - 1}`)
        .focus();
    }, 100);
  }
}
