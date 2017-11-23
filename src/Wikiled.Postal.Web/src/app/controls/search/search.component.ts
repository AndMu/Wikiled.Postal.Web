import { Component, ViewChild, OnInit, EventEmitter, Output, Input, AfterViewInit } from '@angular/core';
import { PostalService } from '../../service/postal.service';
import { PostalData } from '../../service/postal.Model';
import { GoogleAnalyticsEventsService } from "../../service/analytics.service";
import 'rxjs/add/operator/map'; // imports just map
import 'rxjs/add/operator/mergeMap'; // just mergeMap
import 'rxjs/add/operator/switchMap'; // just switchMap

@Component({
    providers: [PostalService, GoogleAnalyticsEventsService],
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

    @ViewChild('autocomplete')
    public autocomplete: any;

    public data: PostalData[] = [];

    public isBusy: boolean;

    @Input()
    public url: string;
	
	@Output()
    public onDataChanged = new EventEmitter<PostalData[]>();

    @Output()
    public onSearch = new EventEmitter<string>();

    constructor(private postalService: PostalService, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {}

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.autocomplete.filterChange.asObservable()
            .do(() => {
                this.autocomplete.loading = true;
            })
            .filter(item => item.length > 2)
            .switchMap(value => this.postalService.findLocation(value))
            .subscribe(item => {
                this.data = item;
                this.autocomplete.loading = false;
                this.autocomplete.toggle(true);
				this.onDataChanged.emit(item);
            });
    }

    public onOpenPost(event: any): void {
        if (this.data == null ||
            this.data.length === 0) {
            event.preventDefault();
        }
    }

    public onValueChangePost(event: any): void {
        this.onSearch.emit(event);
    }

    public onSearchClick(): void {
        this.googleAnalyticsEventsService.emitEvent("BasicTracking", "Clicked", this.autocomplete.value, 10);
        this.onSearch.emit(this.autocomplete.value);
    }

    public onFilterChangePost(event: any): void {
        this.autocomplete.loading = false;
    }
}
