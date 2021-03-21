import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorisationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // if (request.method !== 'GET') {
    //   const Autherization =
    //     'Basic ' +
    //     btoa('garaev-salavat:1a3785e68eb620a16aa2291087fba3fffd9bce98');
    //   const authRequest = request.clone({
    //     setHeaders: { Autherization },
    //   });
    //   console.log('Интерцептор ', Autherization);
    //   return next.handle(authRequest);
    // }
    return next.handle(request);
  }
}
