import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";


// interceptor is used to intercept outgoing requests, and modify them
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    // add a new header to header
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', "Bearer " + authToken)
    });
    return next.handle(authRequest);
  }
}
