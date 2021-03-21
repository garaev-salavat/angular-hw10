import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalWorkComponent } from './final-work.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { DialogContentExampleDialog } from './add-issues.component';



@NgModule({
  declarations: [FinalWorkComponent, DialogContentExampleDialog],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [FinalWorkComponent, DialogContentExampleDialog],
})
export class FinalWorkModule { }
