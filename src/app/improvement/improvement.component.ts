import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-improvement',
  templateUrl: './improvement.component.html',
  styleUrls: ['./improvement.component.css'],
})
export class ImprovementComponent implements OnInit {
  public improvementForm: FormGroup;
  constructor(private improvementfb: FormBuilder) {
    this.improvementForm = improvementfb.group({
      improvements: improvementfb.array([]),
    });
  }

  ngOnInit() {}
  get improvements(): FormArray {
    return this.improvementForm.get('improvements') as FormArray;
  }

  newImprovementNotes(): FormGroup {
    return this.improvementfb.group({
      improvement: '',
    });
  }
  removeImprovementsNotes(i: number) {
    this.improvements.removeAt(i);
  }
  addwentWellNotes() {
    this.improvements.push(this.newImprovementNotes());
    console.log(this.improvements.length);
    setTimeout(() => {
      document.getElementById(`${this.improvements.length - 1}`).focus();
    }, 100);
  }
}
