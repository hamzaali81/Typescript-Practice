import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();
console.log(user);
 
const map = document.getElementById('map')
new google.maps.Map(map,{
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});