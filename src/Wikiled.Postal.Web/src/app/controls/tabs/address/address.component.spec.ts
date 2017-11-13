import { TestBed, async } from '@angular/core/testing';
import { AddressComponent } from './address.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddressComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AddressComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
