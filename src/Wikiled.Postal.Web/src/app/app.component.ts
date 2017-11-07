import { Component, ViewChild, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PostalService } from './service/postal.service';
import { PostalData } from './service/postal.Model';
import { LocalAuthority } from './service/authority.model';
import 'rxjs/add/operator/map'; // imports just map
import 'rxjs/add/operator/mergeMap'; // just mergeMap
import 'rxjs/add/operator/switchMap'; // just switchMap
import { delay } from 'rxjs/operator/delay'; // just delay

@Component({
  providers: [PostalService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild("autocomplete") public autocomplete: any;

  public data: PostalData[] = [];

  public selectedArea: PostalData;

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
  }


  public onFilterChangePost(event: any): void {
  }
}
