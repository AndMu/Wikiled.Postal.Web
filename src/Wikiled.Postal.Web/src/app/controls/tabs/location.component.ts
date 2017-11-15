import { Component, OnInit } from '@angular/core';
import { PostalService } from '../../service/postal.service';
import { PostalData } from '../../service/postal.Model';
import 'rxjs/add/operator/map'; // imports just map
import 'rxjs/add/operator/mergeMap'; // just mergeMap
import 'rxjs/add/operator/switchMap'; // just switchMap

@Component({
    providers: [PostalService],
    selector: 'app-location',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})

export class LocationComponent implements OnInit {

    public data: PostalData[] = [];

    public description = 'It can be also used as autocomplete. With minimum 3 letters lentgh and max 10 results back.';

    public url = 'http://api.topostcode.co.uk/postal/location/';

    constructor(private postalService: PostalService) { }

    ngOnInit() {
    }

    public onDataChanged(event): void {
        this.data = event;
    }

    public onSearch(event): void {
    }
}

