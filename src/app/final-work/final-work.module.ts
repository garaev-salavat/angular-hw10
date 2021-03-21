import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalWorkComponent } from './final-work.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { DialogContentExampleDialog } from './add-issues.component';
import { AuthorisationInterceptor } from '../authorisation.interceptor';



@NgModule({
  declarations: [FinalWorkComponent, DialogContentExampleDialog],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthorisationInterceptor, multi: true}],
  exports: [FinalWorkComponent, DialogContentExampleDialog],
})
export class FinalWorkModule { }
