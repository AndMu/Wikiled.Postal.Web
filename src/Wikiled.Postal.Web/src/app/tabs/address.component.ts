import { Component, ViewChild, OnInit } from '@angular/core';
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

  public addressData: AddressData[] = [];

  public isBusy: boolean;

  constructor(private postalService: PostalService) { }

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
      });
  }

  public onOpenPost(event: any): void {
    if (this.data == null ||
      this.data.length === 0) {
      event.preventDefault();
    }
  }

  public onValueChangePost(event: any): void {
    this.searchAddress(event);
  }

  public onSearchClick(): void{
     this.searchAddress(this.autocomplete.value);
  }

  public onFilterChangePost(event: any): void {
    this.autocomplete.loading = false;    
  }
  
  private searchAddress(postCode: string): void {

    this.autocomplete.loading = false;
    if (postCode != null && postCode.length > 5) {
      this.postalService.findAddress(postCode)
        .subscribe(item => {
          this.autocomplete.loading = false;
          this.addressData = item;
        });
    }
  }
}
