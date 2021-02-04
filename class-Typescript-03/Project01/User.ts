import faker from 'faker';
//@type/faker
export class User{
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor(){
    this.name = faker.name.firstName();
    this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude())
    }
    
    console.log('this.location',this.location);
    }
}