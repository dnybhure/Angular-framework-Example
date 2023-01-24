import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.css'],
})
export class ActionItemComponent implements OnInit {
  public actionItemForm: FormGroup;
  constructor(private actionItemfb: FormBuilder) {
    this.actionItemForm = actionItemfb.group({
      actionItems: actionItemfb.array([]),
    });
  }

  ngOnInit() {}
  get actionItems(): FormArray {
    return this.actionItemForm.get('actionItems') as FormArray;
  }

  newActionItemNotes(): FormGroup {
    return this.actionItemfb.group({
      actionItem: '',
    });
  }
  removeActionItemNotes(i: number) {
    this.actionItems.removeAt(i);
  }
  addActionItemNotes() {
    this.actionItems.push(this.newActionItemNotes());
    console.log(this.actionItems.length);
    setTimeout(() => {
      document
        .getElementById(`actionItem${this.actionItems.length - 1}`)
        .focus();
    }, 100);
  }
}
