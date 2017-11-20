import { TestBed, async } from '@angular/core/testing';
import { AutoAddressComponent } from './autoaddress.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostalService } from '../../service/postal.service';

describe('AutoAddressComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
            declarations: [AutoAddressComponent ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [PostalService]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AutoAddressComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
