export class Contact {

    //constructor (public firstname:string, public lastname:string, public phone:string ){}

    public id:number
    public firstname:string
    public lastname: string
    public phone: string

    constructor (id:number, firstname:string, lastname:string, phone:string){
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.phone = phone
    }

}
