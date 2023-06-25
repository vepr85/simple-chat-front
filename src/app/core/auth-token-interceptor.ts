import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "./auth-service";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private readonly _authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this._authService.authToken) {
      return next.handle(req);
    }

    let headers = req.headers.set('Authorization', `Bearer ${this._authService.authToken}`);

    const paramReq = req.clone({headers});

    return next.handle(paramReq);
  }
}
