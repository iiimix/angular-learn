import { Component } from '@angular/core';
import { MyhttpService } from './myhttp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // 
  styles: ['h1 {text-align: center}']
})
export class AppComponent {
  private title = '你好，我是大名鼎鼎Angular';
  constructor(private service: MyhttpService) {
    service.sayHello()
  }
}
