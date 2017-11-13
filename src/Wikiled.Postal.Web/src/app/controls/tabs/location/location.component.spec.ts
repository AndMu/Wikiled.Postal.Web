import { TestBed, async } from '@angular/core/testing';
import { LocationComponent } from './location.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LocationComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LocationComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(LocationComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
