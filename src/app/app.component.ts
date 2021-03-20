import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-hw10-tsk1';

  previousPage: string = '';
  nextPage: string = '';
  currentPage: string ='';
  history: any;

  constructor(private router: Router, private location: Location) {

    this.router.events
    .pipe(filter(e => e instanceof RoutesRecognized))
    .pipe(pairwise())
    .subscribe((event: any[]) => {
      console.log(event);
      this.previousPage = event[0].urlAfterRedirects;
    });

  }
  ngOnInit(): void {

  }

  goAboutMy() {
    this.router.navigate(['about-my']);
  }

  goMyProjects() {
    this.router.navigate(['my-projects']);
  }

  backPreviousPage() {
    this.location.back()
  }

  forwardPage(){
    this.location.forward()

  }

  back(): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl('/')
    }
  }

  forward() {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.forward()
    } else {
      this.router.navigateByUrl('/')
    }
  }
}
