import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  cars = ['Ford','Chevrolet','Buick'];

  constructor() { 

  }

  getCarsData(){
    return this.cars;
  }
}
