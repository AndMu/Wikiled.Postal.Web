import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostalService } from '../../service/postal.service';

describe('ContactComponent', () => {

    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;
    let service: PostalService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule ],
            declarations: [ContactComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [PostalService]
        });

        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        service = TestBed.get(PostalService);
    });

    it('should create the app', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
