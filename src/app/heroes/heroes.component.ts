import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'
import {HEROES as HEROES_Array} from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Michael'
  };

  // selectedHero: Hero = {id:0, name: ''};
  selectedHero: Hero;

  heroes = HEROES_Array
  
  currentClasses: {}
  condition1
  condition2
  condition3

  constructor() { }

  ngOnInit() {
    console.log(HEROES_Array);
    this.setCurrentClasses()
  }

  onSelect(select: Hero): void {
    this.selectedHero = select;
  }

  onChange(value) {
    console.log(this.condition1,
      this.condition2,
      this.condition3)
      this.setCurrentClasses()
  }
  setCurrentClasses() {
    this.currentClasses = {
      'className1': this.condition1,
      'className2': this.condition2,
      'className3': this.condition3
    }
  }
}
