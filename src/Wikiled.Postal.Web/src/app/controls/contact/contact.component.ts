import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostalService } from '../../service/postal.service';
import 'rxjs/add/operator/map'; // imports just map
import 'rxjs/add/operator/mergeMap'; // just mergeMap
import 'rxjs/add/operator/switchMap'; // just switchMap

@Component({
    providers: [PostalService],
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

    ngOnInit() {
    }

    ngAfterViewInit() {
    }
}
