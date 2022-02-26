import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../Services/service.service"
interface Currency {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  constructor(private shared:ServiceService) { }

  ngOnInit(): void {
  }
  curr:any;
  data:any;
  t:any;
  d:any
  
  currency: Currency[] = [
    {value: 'usd', viewValue: 'USD'},
    {value: 'euro', viewValue: 'EURO'},
    {value: 'gbp', viewValue: 'GBP'},
    {value:'cny',viewValue:'CNY'}
  ];

  doSubmit(){
    var i:number;
    console.warn("Hello");
    if(this.data=='usd'){
      console.warn(74*this.curr);
      this.t=this.curr*74;
    }
    else if(this.data=="euro"){
      console.warn(84*this.curr);
      this.t=this.curr*84;
    }
    else if(this.data=="gbp"){
      console.warn(101*this.curr);
      this.t=this.curr*101;
    }
    else if(this.data=="cny"){
      console.warn(11*this.curr);
      this.t=this.curr*11;
    }
    this.shared.setFinal(this.t);
    this.shared.setCountry(this.data)
    
  }


}
