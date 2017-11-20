import { Component, OnInit } from '@angular/core';
import { PostalService } from '../../service/postal.service';
import { LoggingService } from '../../helpers/logging.service';
import { AddressData } from '../../service/address.Model';
import 'rxjs/add/operator/map'; // imports just map
import 'rxjs/add/operator/mergeMap'; // just mergeMap
import 'rxjs/add/operator/switchMap'; // just switchMap

@Component({
    providers: [PostalService, LoggingService],
    selector: 'app-autoaddress',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})

export class AutoAddressComponent implements OnInit {

    public description = 'It can be also used as autocomplete. With minimum 3 letters lentgh and max 20 results back.';

    public url = 'http://api.topostcode.co.uk/postal/AutoComplete/Address/';

    public data: AddressData[] = [];

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
            this.postalService.findAutoComplete(event)
                .subscribe(item => {
                    this.data = item;
                });
        }
    }
}
