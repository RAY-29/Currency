import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
interface Currency {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CC';


  constructor() { }

  ngOnInit(): void {
  }
    

}
