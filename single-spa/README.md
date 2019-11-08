## 微前端

### single-spa + systemjs 方案

主框架: 负责 single-spa 的注册、核心包的加载、子系统间的协调、路由权限、数据流管理

main-app: 负责登录页、portal 页、layout 层、项目公共部分管理(vue)

vue-app: vue 演示

to-do:

react-app、ng-app

目前主要思路是：子项目打包成`umd`模式，通过`systemjs`加载，再由`single-spa`框架加载各个子项目，通用库独立打包管理

已解决：

- 完成 single-spa + systemjs 融合 
- 子项目完全独立，通过`main-app`按需加载
- vue、vue-router、vuex、iview 抽离，全部子系统共用，避免资源浪费
- 解决开发环境子系统子路由刷新无法重定向问题

待解决问题：

- 目前css文件必须打包到app.js里面，不能使用`extract`，所以一个项目就是一个app.js，这样app.js体积比较大
- 全局组件打包成umd注入还是打包成组件库管理？最终方式只能是`umd`或者`amd`
- ~~配置文件注入~~
- axios
- 权限控制
- 如何在systemjs环境下写es6+

资料:

[single-spa](https://single-spa.js.org/docs/ecosystem-vue.html)
[systemjs](https://github.com/systemjs/systemjs)

### 运行方法

```
// 启动主框架
yarn && yarn serve

// 启动layout框架
cd main-app
yarn && yarn serve

// 启动子项目
cd vue-app
yarn && yarn serve
```
