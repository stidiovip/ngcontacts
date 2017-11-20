import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from '../entity/contact';

import _ from 'lodash'

@Injectable()
export class ContactService {

  // la liste des contacts
  private contacts:Array<Contact> = new Array<Contact>()

  /**
   * Constructeur avec injection de dep.
   */
  constructor(private http:HttpClient) {}

  /**
   * Get the contacts
   */
  public getContacts = () => {
    return this.http.get<Array<Contact>>('/api/contacts');
  }

  public deleteContact = ( contact ) => {
    // to be implemented
  }

  public addContact = ( contact ) => {
    // to be implemented
  }

  public updatedContact = ( contact ) => {
    // to be implemented
  }
  
}
