import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PostalService } from '../../service/postal.service';
import { ContactForm } from '../../service/contactform.model';
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

    public form: FormGroup;

    public isSent: boolean;

    constructor(private fb: FormBuilder, private service: PostalService) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            email: ['', [ Validators.required, Validators.email]],
            name: ['', [Validators.required]],
            subject: ['', [Validators.required]],
            text: ['', [Validators.required]],
        });
    }

    ngAfterViewInit() {
    }

    public onSubmit(): void {
        const contactForm = new ContactForm();
        contactForm.app = 'postcode';
        contactForm.address = this.form.controls['email'].value;
        contactForm.from = this.form.controls['name'].value;
        contactForm.subject = this.form.controls['subject'].value;
        contactForm.message = this.form.controls['text'].value;
        this.service.sendForm(contactForm);
        this.isSent = true;
    }
}
