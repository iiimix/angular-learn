import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'
import {HEROES as HEROES_Array} from '../mock-heroes'
import { HeroService } from '../hero.service';
import { filter, map } from 'rxjs/operators';

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

  heroes;
  
  currentClasses: {}
  condition1
  condition2
  condition3

  filterNumber=9

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    console.log(HEROES_Array);
    this.setCurrentClasses()
  }
  onChangeLimit() {
  }

  getHeroes(): void {
    // 第一种方式，直接获取heroes数组
    // this.heroes = this.heroService.getHeros();

    // 第二种方式，通过subscribe订阅函数，设置回调
    this.heroService.getHeros().pipe(
      map(heroes => heroes.filter(h => h.id > 12))
    )
      .subscribe(heroes => this.heroes = heroes);
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
