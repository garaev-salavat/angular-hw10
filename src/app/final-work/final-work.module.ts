import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalWorkComponent, ReplayIssueDialog } from './final-work.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { DialogContentExampleDialog } from './add-issues.component';
import { AuthorisationInterceptor } from '../authorisation.interceptor';



@NgModule({
  declarations: [FinalWorkComponent, DialogContentExampleDialog, ReplayIssueDialog ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthorisationInterceptor, multi: true}],
  exports: [FinalWorkComponent, DialogContentExampleDialog, ReplayIssueDialog],
})
export class FinalWorkModule { }
