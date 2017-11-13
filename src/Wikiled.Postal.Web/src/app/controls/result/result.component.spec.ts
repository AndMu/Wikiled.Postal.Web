import { TestBed, async } from '@angular/core/testing';
import { ResultComponent } from './result.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LocationComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResultComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(ResultComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
