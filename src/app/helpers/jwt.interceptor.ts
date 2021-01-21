import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenStorageService } from '../services/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor(private tokenStorageService: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        let token = this.tokenStorageService.getToken();
        if(token != null){
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY,'Bearer '+token.slice(1, -1)) });
        }
        return next.handle(authReq);
    }
}