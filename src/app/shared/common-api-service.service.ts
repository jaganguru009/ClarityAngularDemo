import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class CommonAPIService {
options:RequestOptions;
  constructor(private http:Http) { }

    //this method will be shared across all child services
      getAll(): Observable<any[]> {
        // ...using get request
      
            return this.http.get('https://jsonplaceholder.typicode.com/users')
                // ...and calling .json() on the response to return data
                .map((res: Response) => res.json())
                //...errors if any
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        
    
      }
      getAllById(id): Observable<any[]> {
        // ...using get request
      
            return this.http.get('https://jsonplaceholder.typicode.com/todos?UserId='+id)
                // ...and calling .json() on the response to return data
                .map((res: Response) => res.json())
                //...errors if any
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        
    
      }
      deleteAllById(id:number):Observable<any[]>{
        return this.http.delete('https://jsonplaceholder.typicode.com/todos?id='+id)
        .map((res:Response)=>res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
      } 


}