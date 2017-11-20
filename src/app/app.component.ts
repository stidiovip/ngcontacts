import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from './entity/contact'
import { ContactService } from './services/contact.service'

import { map, filter } from 'rxjs/operators'

import _ from "lodash"

@Component({
  selector: 'ng-contacts',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Controller 
export class AppComponent implements OnInit, OnDestroy {
  // The title of the app
  public title = "Gestion de contacts - DevFest BKO 2017";

  // Liste des contacts
  public contacts:Array<Contact> = new Array<Contact>();

  public contact:Contact;

  // indicates if the new form should be displayed
  showForm = false;

  // criterion of filtering
  critarion:string = ""

  // constructor
  constructor (private service:ContactService){}
  
  /**
   * Initilisation du composant
   */
  ngOnInit (){

    this.service.getContacts().subscribe(
      contacts => this.contacts = contacts
    );

    this.contact = new Contact(0, "", "", "")

  }
 
  /**
   * 
   */
  ngOnDestroy (){

  }

  onDelete(contact:Contact){
      _.remove(this.contacts, ( _contact ) => {
        return _contact.id === contact.id 
    })
  }

  onNewContact = () => {
    this.showForm = true;
  }

  onCloseNewContact = () => {
    this.showForm = false;
  }

  onAdd(){
    this.contacts.push(new Contact(this.contacts.length + 1, this.contact.firstname, this.contact.lastname, this.contact.phone))
    this.reset()
  }

  /**
   * Resets of the contact
   */
  private reset = () => {
    this.contact = new Contact(0, "", "", "")
  }

}
