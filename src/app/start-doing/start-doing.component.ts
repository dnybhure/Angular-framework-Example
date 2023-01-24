import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-start-doing',
  templateUrl: './start-doing.component.html',
  styleUrls: ['./start-doing.component.css'],
})
export class StartDoingComponent implements OnInit {
  public startDoingForm: FormGroup;
  constructor(private startDoingfb: FormBuilder) {
    this.startDoingForm = startDoingfb.group({
      startDoingItems: startDoingfb.array([]),
    });
  }

  ngOnInit() {}
  get startDoingItems(): FormArray {
    return this.startDoingForm.get('startDoingItems') as FormArray;
  }

  newStartDoingNotes(): FormGroup {
    return this.startDoingfb.group({
      startDoing: '',
    });
  }
  removestartDoingNotes(i: number) {
    this.startDoingItems.removeAt(i);
  }
  addStartDoingNotes() {
    this.startDoingItems.push(this.newStartDoingNotes());
    console.log(this.startDoingItems.length);
    setTimeout(() => {
      document
        .getElementById(`startDoing${this.startDoingItems.length - 1}`)
        .focus();
    }, 100);
  }
}
