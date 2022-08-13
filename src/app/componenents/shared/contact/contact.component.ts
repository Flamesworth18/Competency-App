import { ToastrService } from 'ngx-toastr';
import { ContactService } from './../../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/add ons/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: Contact = {
    id: '',
    name: '',
    emailAddress: '',
    message: '',
    dateCreated: '',
  }

  constructor(
    private contactService: ContactService,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required])
  });

  contactSubmitted() {
    this.contact.name = this.contactForm.get('name')?.value || '';
    this.contact.emailAddress = this.contactForm.get('email')?.value || '';
    this.contact.message = this.contactForm.get('message')?.value || '';

    this.requestContact();
  }

  requestContact(){
    this.contactService.addContact(this.contact)
    .subscribe(
      res => {
        this.toastr.success("Your message has been sent", "Delivered Successfully!")
      }
    )
  }

}
