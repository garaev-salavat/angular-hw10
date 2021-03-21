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

  options = {
      headers: new HttpHeaders().append(
        'Authorization',
        'Basic ' + btoa('garaev-salavat:5f4fb7ded91ca6e0ef494f364a23719c024e6276')
      ),
    };

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
    
    return this.http
      .post(
        'https://api.github.com/repos/garaev-salavat/angular-hw10/issues',
        {
          ...issue,
          owner: 'garaev-salavat',
          repo: 'angular-hw10',
        },
        this.options
      )
      .pipe(
        map((data) => {
          return data;
        })
      )
      .subscribe((data) => {
        console.log('Добавление POST', data);
      });
  }

  closeIssure(issueNumber): void {
    this.http
      .put(
        'https://api.github.com/repos/garaev-salavat/angular-hw10/issues/' +
          issueNumber +
          '/lock',
        {
          owner: 'garaev-salavat',
          repo: 'angular-hw10',
          issue_Number: issueNumber,
          lock_reasson: 'resolved',
        },this.options
      )
      .subscribe((data) => {
        console.log(data);
      });

    this.http
      .patch(
        'https://api.github.com/repos/garaev-salavat/angular-hw10/issues/' +
          issueNumber,
        {
          owner: 'garaev-salavat',
          repo: 'angular-hw10',
          issue_Number: issueNumber,
          state: 'closed',
        },this.options
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  addComent(issueNumber, body): void {
    this.http
      .post(
        'https://api.github.com/repos/garaev-salavat/angular-hw10/issues/' +
          issueNumber +
          '/comments',
        {
          owner: 'garaev-salavat',
          repo: 'angular-hw10',
          issue_Number: issueNumber,
          body: body,
        }, this.options
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
