import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

/**
 * @NgModule
 * 作用：定义angular模块语法，与普通javascript模块不同，@NgModule声明一个angular模块
 * 
 * 装饰器语法，声明AppModule是一个angular模块
 * 
 * 元数据metadata
 *      imports 引入其他模块，引入依赖
 *      declarations 该模块所拥有的组件
 *      providers 各种服务提供商
 *      bootstrap 根组件，Angular 创建它并插入 index.html 宿主页面.
 * 
 * Angular CLI 创建的默认应用只有一个组件 AppComponent，
 * 所以它会同时出现在 declarations 和 bootstrap 数组中。
 * 
 * declarations 数组只能接受可声明对象。可声明对象包括组件、指令和管道。
 *  一个模块的所有可声明对象都必须放在 declarations 数组中。
 *  可声明对象必须只能属于一个模块，如果同一个类被声明在了多个模块中，编译器就会报错
 */
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
