import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedReadingComponent } from './recommended-reading.component';
import { MaterialModule } from '../material-module';



@NgModule({
  declarations: [RecommendedReadingComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [RecommendedReadingComponent]
})
export class RecommendedReadingModule { }
