import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = "a91739fffbaca61621c7b8f3853a858934f35727";

    request = request.clone({setHeaders:{Authorization:'Bearer '+ TOKEN} })
    return next.handle(request);
  }
}
