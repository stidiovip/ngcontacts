const Contact = require('./contact');
const _ = require('lodash');

/**
 * This is Data Access Layer for contacts
 */
class ContactData {

    /**
     * Default constructor
     */
    constructor (){

        this._contacts = [
            new Contact({id : 1, firstname: "Oumou", lastname: "COULIBALY", phone: "0000011111"}),
            new Contact({id : 2, firstname: "Abdoulaye", lastname: "SIDIBE", phone: "0000011112"}),
        ];

        // for counting the next contact id
        this.max = this._contacts.length;
    }

    /**
     * Gets contacts list
     * @return {Array}
     */
    get contacts (){
        return this._contacts;
    }

    /**
     * Adds a contact
     * @param {Contact} contact
     */
    addContact (contact){
        contact.id = ++this.max;
        this._contacts.push( contact );
        return contact;
    }

    /**
     * Finds a contact by id
     * @param id
     * @return {*}
     */
    findContactById (id){
        return _(this._contacts).find( (contact) =>{
            return contact.id == id;
        });
    }

    /**
     * Deletes a contact
     * @param {Contact} contact
     */
    deleteContact (contact) {
        _.remove(this._contacts, function (_contact){
            return contact.id == _contact.id;
        });
    }
}

module.exports = ContactData;