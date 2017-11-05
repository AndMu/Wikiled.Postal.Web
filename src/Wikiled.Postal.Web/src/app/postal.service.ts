import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { PostalData } from "./postal.model";
import { ApiResponse } from "./result.model";

@Injectable()
export class PostalService {
  constructor(private http:HttpClient) {
  }

  public findSimilarPost(code): Observable<PostalData[]> {    
    var query = 'http://api.wikiled.com/Postal/Location/' + code
    return this.http.get<ApiResponse<PostalData[]>>(query)
          .map(item => {            
            var received = item.result;
            return received;
          });
  }

}
