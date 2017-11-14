
/**
 * This is the Contact class
 */
class Contact {

    /**
     * The constructor
     * @param data
     */
    constructor ( data ){
        this.id         = data.id || 0;
        this.firstname  = data.firstname || "";
        this.lastname   = data.lastname || "";
        this.phone      = data.phone || "";
    }

}

module.exports = Contact;