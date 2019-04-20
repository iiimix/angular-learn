# Angular7学习路线，step by step

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