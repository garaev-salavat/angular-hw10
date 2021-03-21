import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Issue, Issues } from './issues.interface';

@Injectable({
  providedIn: 'root',
})
export class FinalWorkService {
  issues;

  token = '9c5026e014ba68797d396097a7681d7b47b67a0e';

  constructor(private http: HttpClient) {}

  getIssues(): Observable<Issues> {
    console.log('Запрос getIssues ...');
    return this.http.get(
      'https://api.github.com/repos/garaev-salavat/angular-hw10/issues'
    ) as Observable<Issues>;
  }

  loadIssues() {
    this.http
      .get('https://api.github.com/repos/garaev-salavat/angular-hw10/issues')
      .subscribe((data) => {
        this.issues = data;
      });
  }

  postUser(issue: Issue) {
    const options = {
      headers: new HttpHeaders().append('Authorization', 'Basic ' + btoa('garaev-salavat:' + this.token)),
    }
    return this.http
      .post('https://api.github.com/repos/garaev-salavat/angular-hw10/issues', {
        ...issue,
        owner: 'garaev-salavat',
        repo: 'angular-hw10',
      }, options)
      .pipe(
        map((data) => {
          return data;
        })
      )
      .subscribe((data) => {
        console.log('Добавление POST', data);
      });
  }
}
