import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-reading',
  templateUrl: './recommended-reading.component.html',
  styleUrls: ['./recommended-reading.component.css'],
})
export class RecommendedReadingComponent implements OnInit {
  step = 0;
  constructor() {}

  ngOnInit(): void {}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
