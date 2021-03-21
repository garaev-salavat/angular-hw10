import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Issue, Issues } from './issues.interface';

@Injectable({
  providedIn: 'root',
})
export class FinalWorkService {
  issues;

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
    console.log('=======================================');
    console.log('Должна быть POST отправка. Теоритечески', issue.title, issue.body);
    console.log('========================================');

    return this.http
      .post('https://api.github.com/repos/garaev-salavat/angular-hw10/issues', {issue})
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
