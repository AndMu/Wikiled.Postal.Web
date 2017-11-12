import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostalService } from './postal.service';

describe('PostalService', () => {

    let service: PostalService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
            providers: [PostalService]
        });
    });

    beforeEach(() => {
        service = TestBed.get(PostalService);
    });

    it('should create the app', async(() => {
        let results;
        service.findAddress('N10GL')
            .subscribe(data => {
                results = data;
            });
    }));
});
