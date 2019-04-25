import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-heroes';
import { Observable, of, pipe, from, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  hero$: BehaviorSubject<any> = new BehaviorSubject<any>(HEROES);

  constructor() { }
  
  getHeros(): Observable<any> {
    // of函数会返回一个可观察对象，该对象可以被订阅，也可以被发布
    // 同样作用的函数还有，filter、from、map、pipe
    return of(HEROES)
  }
}
