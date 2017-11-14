import { Component, ViewChild, OnInit } from '@angular/core';
import { PostalService } from '../../../service/postal.service';
import { PostalData } from '../../../service/postal.Model';
import 'rxjs/add/operator/map'; // imports just map
import 'rxjs/add/operator/mergeMap'; // just mergeMap
import 'rxjs/add/operator/switchMap'; // just switchMap

@Component({
    providers: [PostalService],
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {

    public data: PostalData[] = [];

    constructor(private postalService: PostalService) { }

    ngOnInit() {
    }

    public onDataChanged(event): void {
        this.data = event;       
    }
}

