import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PostalData } from './postal.model';
import { AddressData } from './address.model';
import { ContactForm } from './contactform.model';
import { ApiResponse } from './result.model';

@Injectable()
export class PostalService {
    constructor(private http: HttpClient) {
    }

    public sendForm(form: ContactForm) {
        this.http.post(`http://api.topostcode.co.uk/contact`, form).subscribe();
    }

    public findSimAddress(code: string): Observable<AddressData[]> {
        return this.getData<AddressData[]>('SimAddress', code);
    }

    public findLocation(code: string): Observable<PostalData[]> {
        return this.getData<PostalData[]>('location', code);
    }

    public findAddress(code: string): Observable<AddressData[]> {
        return this.getData<AddressData[]>('address', code);
    }

    private getData<T>(type: string, code: string): Observable<T> {
        return this.http.get<ApiResponse<T>>(this.getQuery(type, code))
            .map(item => {
                return item.result;
            });
    }

    private getQuery(type: string, code: string): string {
        const url = `http://api.topostcode.co.uk/postal/${type}/${code}`;
        return url;
    }
}
