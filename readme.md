### indeprods.js 是什么？
一个展示独立开发者联盟成员的个人链接的js插件，也就是友链插件。
indeprods是Independent Products的缩写，分别取这两个单词的前四个字母，表示独立的产品的含义。

### 主要功能
把独立开发者的信息汇集到一个js插件上，可以通过自定义的配置，修改js插件的表现，凡是在本项目注册的用户，即可以在列表中展现，并要求该用户在其网站中添加本js插件。

### 独立开发者群
这是我个人维护的一个微信群，主要讨论[微创业](https://www.v2ex.com/t/539137#reply86)项目方面的事情

### 效果

参见<https://hostingranking.cn/friendlinks/>

### 安装

npm安装：

```shell
npm i indeprods.js
```

或者下载下来安装，下载地址：[release](https://github.com/cmlanche/indeprods-js/releases)

### 使用
在你需要放友链的地方加上一个div
```html
<div class="indeprods"></div>
```
然后添加indeprods.js依赖

```html
<script src="your indeprods.js"></script>
```

### 参与开发

clone代码：`git clone https://github.com/cmlanche/indeprods-js.git`

安装webpack等依赖：

```
npm i webpack webpack --save-dev
npm install --save-dev css-loader
npm install --save-dev babel-loader @babel/core
```

编译：

```shell
webpack
```

or 

```shell
npm run build
```

最终会再dist目录生成`indeprods.js`

欢迎在[issues](https://github.com/cmlanche/indeprods-js/issues)中提意见和提交pr

### 开源协议
[996.icu](https://github.com/996icu/996.ICU)