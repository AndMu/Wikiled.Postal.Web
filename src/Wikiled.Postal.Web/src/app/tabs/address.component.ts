import { Component, ViewChild, OnInit} from '@angular/core';
import { PostalService } from '../service/postal.service';
import { PostalData } from '../service/postal.Model';
import { AddressData } from '../service/address.Model';
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

  @ViewChild("autocomplete") public autocomplete: any;

  public data: PostalData[] = [];

  public selectedArea: PostalData;

  public addressData: AddressData[] = [];

  public selectedPostCode: string;

  public isBusy: boolean;

  public selectedLocalAuthority: string;

  constructor(private postalService: PostalService) { }
  
  ngOnInit() {
  
  }

  ngAfterViewInit() {
      var filtered = this.autocomplete.filterChange.asObservable()
          .do(() => {
              this.autocomplete.loading = true;
          })
          .filter(item => item.length > 2);
      filtered.switchMap(value => this.postalService.findLocation(value))
      .subscribe(item => {
        this.data = item;
        this.autocomplete.loading = false;
        this.autocomplete.toggle(true);
        });      
  }

  public onOpenPost(event: any): void {
      if (this.data == null ||
          this.data.length === 0) {
          event.preventDefault();
      }
  }
  
  public onValueChangePost(event: any): void {
    this.autocomplete.loading = false;
    this.selectedArea = this.data.find(item => item.postalCode.toUpperCase() === event.toUpperCase());
    if (this.selectedArea != null) {
      this.selectedLocalAuthority = this.selectedArea.borough;
      this.selectedPostCode = this.selectedArea.postalCode;
    }

    this.postalService.findAddress(event)
        .subscribe(item => {
          this.addressData = item;
        });
  }

  public onFilterChangePost(event: any): void {
  }
}
