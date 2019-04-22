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

  heroes = HEROES_Array
  
  constructor() { }

  ngOnInit() {
    console.log(HEROES_Array)
  }

}
