import { Component, OnInit ,Input} from '@angular/core';
import {ServiceService} from "../Services/service.service"

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(private shared:ServiceService) { }
  t:number=0;
  data:any;


  ngOnInit(): void {
    this.t=this.shared.getFinal()
    this.data=this.shared.getCountry();
  }

}
