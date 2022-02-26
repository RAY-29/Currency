import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  final:number=0;
  country:string=''
  setFinal(data:number){
    this.final=data;
  }
  getFinal(){
    return this.final;
  }
  setCountry(country:string){
    this.country=country;
  }
  getCountry(){
    return this.country;
  }
}
