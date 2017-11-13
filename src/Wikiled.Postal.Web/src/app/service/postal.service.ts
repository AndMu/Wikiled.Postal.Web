import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PostalData } from './postal.model';
import { AddressData } from './address.model';
import { ApiResponse } from './result.model';

@Injectable()
export class PostalService {
    constructor(private http: HttpClient) {
    }

    public findLocation(code: string): Observable<PostalData[]> {
        return this.getData<PostalData[]>('location', code);
    }

    public findAddress(code: string): Observable<AddressData[]> {
        return this.getData<AddressData[]>('address', code);
    }

    private getData<T>(type: string, code: string): Observable<T> {
        return this.http.get<ApiResponse<T>>(this.GetQuery(type, code))
            .map(item => {
                return item.result;
            });
    }

    private GetQuery(type: string, code: string): string {
        const url = `http://api.topostcode.co.uk/postal/${type}/${code}`;
        return url;
    }
}
