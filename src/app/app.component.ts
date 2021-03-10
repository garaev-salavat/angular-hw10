import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';


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

  constructor(private router: Router) {

    this.router.events
    .pipe(filter(e => e instanceof RoutesRecognized))
    .pipe(pairwise())
    .subscribe((event: any[]) => {
      console.log(event[0].urlAfterRedirects);
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
      this.router.navigate([this.previousPage]);
  }
}
