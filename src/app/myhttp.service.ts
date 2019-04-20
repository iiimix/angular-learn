import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  constructor() { }
  sayHello() {
    console.log('Customize Definition Service')
  }
}
