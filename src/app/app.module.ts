import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WentWellComponent } from './went-well/went-well.component';
import { ImprovementComponent } from './improvement/improvement.component';
import { ActionItemComponent } from './action-item/action-item.component';
import { StartDoingComponent } from './start-doing/start-doing.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    WentWellComponent,
    ImprovementComponent,
    ActionItemComponent,
    StartDoingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
