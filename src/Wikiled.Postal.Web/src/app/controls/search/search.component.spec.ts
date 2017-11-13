import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostalService } from '../../service/postal.service';

describe('SearchComponent', () => {

    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let service: PostalService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DropDownsModule, ButtonsModule, HttpClientModule, HttpClientTestingModule ],
            declarations: [SearchComponent],
            providers: [PostalService]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(SearchComponent);
        // get test component from the fixture
        component = fixture.componentInstance;
        // UserService provided to the TestBed
        service = TestBed.get(PostalService);
    });

    it('should create the app', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
