# Angular7学习路线，step by step
手把手的Angular7教学实例，如果之前你认为Angular太难学了，那么告诉你一个好消息，经过此文档的学习后，你会发现Angular很难学是真的。

一切的一切，都要从24年前，一刚入学一年级菜鸟俄罗斯人`Sergey Brin`在一个派对上邂逅了毕业生老油条`Larry Page`说起。仔细一看，巧了，俩人都是博士生；再仔细一看，巧了，俩人就读的学校叫做斯坦福大学

## 环境要求
- Nodejs版本，Angular需要Nodejs版本8.x或者10.x

## 1. 安装Angular CLI（Command Line Interface）
```shell
npm install -g @angular/cli
```


## 2. 创建工作区和应用
```shell
ng new my-app --skipInstall
```
`ng new`命令会自动复制一份最简答的angular工程模板，并且安装依赖
常用参数说明

|参数|别名|可选值|默认值|说明|
|:----|:---|:----|:----|:----|
|skipInstall|-|true\|false|false|true不安装依赖|
|routing|-|true\|false|false|true生成路由模块|
|createApplication|-|true\|false|true|true：自动生成src目录下的初始化的应用app|
|skipTests|-S|true\|false|false|true,不生成spec.ts相关测试文件|
|minimal|-|true\|false|false|true创建不含有任何测试框架的工程|

Angular CLI 会安装必要的 Angular npm 包及其它依赖。这可能要花几分钟。

还将创建下列工作区和初始项目文件：
- 一个新的工作区，根目录名叫 my-app
- 一个初始的骨架应用项目，也叫 my-app（但位于 src 子目录下）
- 一个端到端测试项目（位于 e2e 子目录下）
- 相关的配置文件

初始的应用项目是一个简单的 "欢迎" 应用，随时可以运行它

## 3. 启动开发模式
使用命令`ng serve`编译项目并启动本地调试服务，当然也可以在package.json中配置script脚本
```shell
ng serve --open
```
常用参数说明
|参数名|可选值|默认值|别名|说明|
|:----|:---|:----|:----|:----|
|open|true\|false|false|-o|自动打开浏览器|
|host|hostname|localhost|-|设置本地服务主机地址|
|hmr|true\|false|false|-|true打开模块热更新|
|port|端口号|4200|-|设置端口|
|progress|true\|false|false|-|在控制台显示编译进度|
|watch|true\|false|true|-|监听文件变化，重新编译|

## 4. First Angular组件
组件是Angular应用中的基本构造块，处理屏幕上显示数据，监听用户输入

初始化工程时，angular-cli已经为我们创建了第一个组件，根组件——`app-root`


## 5. 自定义组件`heroes`
使用CLI工具创建一个名为heroes的新组件
```shell
ng generate component heroes
```
> ng generate命令的用法待补充

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
```
1. 从Angular核心库导入Component，并给组件类加上@Component装饰器
1. @Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据

CLI自动生成了三个元数据属性
1. selector——组件的选择器
1. templateUrl——组件模板文件的位置
1. styleUrls——组件私有CSS样式表文件的位置

1. ngOnInit 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方。
1. 始终要 export 这个组件类，以便在其它地方（比如 AppModule）导入它。

给hero组件添加属性
`heroes.component.ts,
```js
export class HeroesComponent implements OnInit {
  hero = 'Michel';
  constructor() { }

  ngOnInit() {
  }
}
```

在模板文件中显示hero属性
`heroes.component.html`
```html
<p>
{{hero}}
</p>
```
最后，把HeroesComponent组件显示出来

1. 首先HeroesComponent组件必须追加到AppComponent的模板中，heroes组件的selector即是元素标签

`app.component.html`
```html
<h1>{{title}}</h1>
<app-heroes></app-heroes>
```
2. HeroesComponent组件在使用命令`ng generate heroes`创建组件的时候，已经在`app.module.ts`入口模块声明了，所以可以在`app.component.html`直接使用
```js
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ]
  ...
  // app.module.ts
```
此时页面已经显示出来了标题和英雄名字了
![Angular首页](https://yoo.qpic.cn/yoo_img/0/34d32b1d9d574387cde83e3ddecbe3fe/0)


## 6. 创建Hero类
真实的英雄当然不止一个名字，为了动态显示更多英雄名字，现在做以下改动

在src/app文件夹创建Hero类，给定id和name属性
```js
export class Hero {
  id: number;
  name: string;
}
```

在`HeroesComponent`类引入Hero类
```ts
import { Hero } from '../hero';
```

添加对象实例hero变量
`heroe.component.ts`
```ts
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Michael'
  };
  constructor() { }
  ngOnInit() {
  }
}
```
同样，模板页面显示也要跟随改动
`heroes.component.html`
```html
<h2>{{hero.name | uppercase}} 信息</h2>
<div><span>id: </span>{{hero.id}}</div>
<div><span>name: </span>{{hero.name}}</div>
```
上面使用了使用管道`UppercasePipe`进行名字格式化

[管道](https://www.angular.cn/guide/pipes)是格式化字符串、金额、日期和其它显示数据的好办法。 Angular 发布了一些内置管道，而且你还可以创建自己的管道

## 用户能编辑英雄属性
双向绑定数据，使数据能够自动化的从组件类到模板，也可以从模板到组件类
`heroes.component.html`
```html
<div>
  <label>name:
    <input [(ngModel)]="hero.name" placeholder="name">
  </label>
</div>
```
`[(ngModel)]` 是 Angular 的双向数据绑定语法。

如果你认为数据绑定太简单了，我奶奶也会`Angular`,那么你还是`Too young too naive`

打开浏览器你会惊喜发现大红大红的Error提示送给你

```
Can't bind to 'ngModel' since it isn't a known property of 'input'. ("
<div>
  <label for="">name: 
    <input [ERROR ->][(ngModel)]="hero.name" placeholder="name" >
  </label>
</div>"): ng:///AppModule/HeroesComponent.html@8:11
```

原因是啥呢，Angular第一次让我感到恶心的地方出现了

ngModel是一个有效的Angular指令，但是，这个指定在默认的情况下是不可用的

惊不惊喜，意不意外

`Talk is cheap, show me the code` ——鲁迅

也就是说，智障模块`AppModule`不知道你要用什么模块来解释这个ngModel

解决办法就是找个模块来认领`ngModel`,在app.module.ts中引入，并且加入imports数组
```
import { FormsModule } from '@angular/forms'.
... 

imports: [
  BrowserModule,
  FormsModule
]
```
好的，现在正常运行，数据双向绑定搞定，一切都是那么美好。

小结
- 你使用 CLI 创建了第二个组件 HeroesComponent。
- 你把 HeroesComponent 添加到了壳组件 AppComponent 中，以便显示它。
- 你使用 UppercasePipe 来格式化英雄的名字。
- 你用 ngModel 指令实现了双向数据绑定。
- 你知道了 AppModule。
- 你把 FormsModule 导入了 AppModule，以便 Angular 能识别并应用 ngModel 指令。
- 你知道了把组件声明到 AppModule 是很重要的，并认识到 CLI 会自动帮你声明它。


## 7. 显示英雄列表
先造一个mock数据,模拟服务端返回的英雄列表
`src/app/mock-heroes.ts`
```ts
import { Hero } from './hero'
export const HEROES: Hero[] = [
  {id: 11, name: '张三麻子'},
  {id: 12, name: '李二蛋'},
  {id: 13, name: '钻石王老五'},
  {id: 14, name: '尼古拉斯赵六'},
  {id: 15, name: '牛二叔'},
  {id: 16, name: '迈克尔-哪里都有我-乔丹'}
]
```

使用*ngFor指令循环显示这些英雄
`heroes.component.html`
```html
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
```

>新需求：当用户点击主列表英雄时，组件底部显示所选英雄的详情

添加click事件绑定
```html
<li *ngFor="let hero of heroes" (click)="onSelect(hero)">
```
`onSelect`是HeroesComponent上的一个方法，嘿伙计，我觉得你会搞定它的，写吧
`heroes.component.ts`
```ts
selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
```
给模板添加选中的hero显示
```html
<h2>{{selectedHero.name | uppercase}} Details</h2>
<div><span>id: </span>{{selectedHero.id}}</div>
<div>
  <label>name:
    <input [(ngModel)]="selectedHero.name" placeholder="name">
  </label>
</div>
```

ok，当你觉得大功告成准备起身喝口咖啡时，Angular不想理你并抛给你一个异常
```
HeroesComponent.html:3 ERROR TypeError: Cannot read property 'name' of undefined
```

大概意思就是，html模板里面不能从一个`undefined`对象读取`name`属性，检查一下，就会知道，selectedHero在应用启动时是未定义的

如何解决？

修改模板，加上`*ngIf`条件指令，一切又变得美好起来
```html
<div *ngIf="selectedHero">
  ...
</div>
```

锦上添花，给选中的英雄加点样式，加上选中类名`[class.selected]="hero===selectedHero"`
```html
<li *ngFor="let hero of heroes"
  [class.selected]="hero===selectedHero"
  >
  ...
</li>
```

Angular的CSS类绑定机制语法
```
[class.some-css-class-name]="some-condition"
```

## 8. 子组件的使用
目前来看，功能确实已经完善，但是有两个缺点
- 英雄详情信息模块无法复用
- 主组件代码越来越多

类似其他框架的使用思路，这里我们同样使用英雄子组件来改造一下

创建hero-detail组件
```shell
ng generate component hero-detail
```
这个命令做了这些事
- 创建目录`src/app/hero-detail`
- 生成组件样式文件
- 生成组件模板文件
- 存放组件类ts文件
- 测试文件

同时还会把`HeroDetailComponent`添加到`src/app/app.module.ts`文件的declarations列表中

把原来的模板复制到`hero-detail.component.html`

