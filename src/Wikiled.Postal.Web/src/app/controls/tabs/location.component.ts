import { Component, OnInit } from '@angular/core';
import { PostalService } from '../../service/postal.service';
import { PostalData } from '../../service/postal.Model';
import { LoggingService } from '../../helpers/logging.service';
import 'rxjs/add/operator/map'; // imports just map
import 'rxjs/add/operator/mergeMap'; // just mergeMap
import 'rxjs/add/operator/switchMap'; // just switchMap

@Component({
    providers: [PostalService, LoggingService],
    selector: 'app-location',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})

export class LocationComponent implements OnInit {

    public data: PostalData[] = [];

    public description = 'It can be also used as autocomplete. With minimum 3 letters lentgh and max 10 results back.';

    public url = 'http://api.topostcode.co.uk/postal/location/';

    public fullurl: string;

    constructor(private postalService: PostalService, private log: LoggingService) { }

    ngOnInit() {
    }

    public onDataChanged(event): void {
    }

    public onSearch(event): void {
        if (event != null && event.length >= 3) {
            this.log.log('OnSearch:' + event);
            this.fullurl = this.url + event;
            this.postalService.findLocation(event)
                .subscribe(item => {
                    this.data = item;
                });
        }
    }
}

