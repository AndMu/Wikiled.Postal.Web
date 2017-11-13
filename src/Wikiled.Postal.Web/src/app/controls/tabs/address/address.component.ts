import { Component, ViewChild, OnInit } from '@angular/core';
import { PostalService } from '../../../service/postal.service';
import { PostalData } from '../../../service/postal.Model';
import { AddressData } from '../../../service/address.Model';
import 'rxjs/add/operator/map'; // imports just map
import 'rxjs/add/operator/mergeMap'; // just mergeMap
import 'rxjs/add/operator/switchMap'; // just switchMap

@Component({
    providers: [PostalService],
    selector: 'address-root',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css']
})

export class AddressComponent implements OnInit {

    public data: AddressData[] = [];

    constructor(private postalService: PostalService) { }

    ngOnInit() {

    }

    private searchAddress(postCode: string): void {

        if (postCode != null && postCode.length > 5) {
            this.postalService.findAddress(postCode)
                .subscribe(item => {
                    this.data = item;
                });
        }
    }
}
