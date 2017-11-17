import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LocalService } from '../../service/local.service';

describe('ContactComponent', () => {

    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;
    let service: LocalService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule ],
            declarations: [ContactComponent],
            providers: [LocalService]
        });

        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        service = TestBed.get(LocalService);
    });

    it('should create the app', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
