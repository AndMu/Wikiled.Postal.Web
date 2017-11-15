import { Component, OnInit } from '@angular/core';
import { PostalService } from '../../service/postal.service';
import { AddressData } from '../../service/address.Model';
import 'rxjs/add/operator/map'; // imports just map
import 'rxjs/add/operator/mergeMap'; // just mergeMap
import 'rxjs/add/operator/switchMap'; // just switchMap

@Component({
    providers: [PostalService],
    selector: 'app-address',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})

export class AddressComponent implements OnInit  {

    public data: AddressData[] = [];

    public description = '';

    public url = 'http://api.topostcode.co.uk/postal/address/';

    public valueField = 'postCode';

    constructor(private postalService: PostalService) { }

    ngOnInit() {
    }

    public onDataChanged(event): void {
        this.data = event;
    }
    
    public onSearch(event): void {

        if (event != null && event.length > 5) {
            this.postalService.findAddress(event)
                .subscribe(item => {
                    this.data = item;
                });
        }
    }
}