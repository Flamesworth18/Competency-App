import { Contact } from '../models/add ons/contact.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  readonly contactURL = "https://hrdmocompetencyapp.azurewebsites.net/api/contact/";

  constructor(private http: HttpClient) { }

  //GET contacts
  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.contactURL);
  }

  //ADD contact
  addContact(contact: Contact): Observable<Contact>{
    contact.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Contact>(this.contactURL, contact);
  }

  //REMOVE contact
  removeContact(id: string): Observable<Contact>{
    return this.http.delete<Contact>(this.contactURL + id);
  }
}
