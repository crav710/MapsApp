import faker from "faker";
import { Mappable } from './CustomMap';

export class Company{
  companyName:string;
  catchPhrase:string;
  location:{
    lat:number;
    lng:number;
  };
  color : string ;

  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat:parseFloat(faker.address.latitude()),
      lng:parseFloat(faker.address.longitude())
    };
    this.color = 'red';
  }
  markerContent():string{
    return `Company Name : ${this.companyName}`;
  }

  
}