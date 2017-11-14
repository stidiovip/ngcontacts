const ContactData = require('./contact-data');

/**
 * This is a Business Access Layer for contacts
 */
class ContactService {

    /**
     * The contructor
     * @param {ContactData} data : the data management module
     */
    constructor ( data ){
        this.data = data;
    }

    /**
     * Get contacts
     * @return {Array}
     */
    getContacts (){
        return this.data.contacts;
    }

    /**
     * Adds a contact
     * @param contact
     */
    addContact (contact){
        return this.data.addContact(contact);
    }

    /**
     * Finds a contact by id
     * @param id
     * @return {*}
     */
    findContactById (id){
        return this.data.findContactById(id);
    }

    /**
     * Deletes a contact
     * @param contact
     */
    deleteContact (contact){
        this.data.deleteContact(contact);
    }
}

module.exports = ContactService;