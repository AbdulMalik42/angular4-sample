import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string
  age:number
  carData : string[]

  constructor(private dataService : DataService) { 
  }

  ngOnInit() {

    this.name = 'abdul malik';
    this.age = 67;
  }

  updateName(event){
    console.log(event);
    this.name = 'hello nasir';
    this.carData = this.dataService.getCarsData();
  }

}
