import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError as observableThrowError} from "rxjs";


//the compiler will generate the necessary metadata to create the class's dependencies when the class is injected.
@Injectable()
//Intercepts and handles an HttpRequest or HttpResponse.
export class HttpErrorsInterceptor implements HttpInterceptor {
    constructor(){}

    //method requires 2 arguments
    intercept(
        //The outgoing request object to handle.
        req: HttpRequest<any>, 
        //The next interceptor in the chain, or the backend if no interceptors remain in the chain.
        next: HttpHandler
        //An observable of the event stream.
        ): Observable<HttpEvent<any>> {
       return next.handle(req).pipe(
           catchError((err) => {
               console.log(err)
               return observableThrowError(err)
           })
       );
    }
}

// function observableThrowError(err: any): any {
//     throw new Error("Function not implemented.");
// }
