import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMyComponent } from './about-my.component';



@NgModule({
  declarations: [AboutMyComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutMyComponent]
})
export class AboutMyModule { }
