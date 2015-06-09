# Ember-rc

使用 Ember.js + Ember-data 编写的 RubyChina 的客户端.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Demo on Github Pages
* 已经将 Demo 部署在 Github Pages 上. [Ember-RC](http://wppurking.github.io/ember-rc)
* 因为 Github Pages 不会让 Ember.js 捕捉所有 URL 请求, 所以无法直接访问 `<host>/topics` 等路径访问, 这个需要配置 `nginx` 或者直接试用 `ember s -prod` 来解决.
** 所以请不要按 "F5"
** 也不要鼠标右键, "打开新窗口""
* Ember.js 部署在 Github Pages 上, 但是所有的 API 调用都是从使用者当地的网络发出, 速度与 API 的 Endpoint 有关与 Ember.js 部署的 Github Pages 无关.
* 因为 API 提供的功能与 [Ruby China](https://ruby-china.org) 页面直接 render 的数据提取算法不一样, 所以会看到不一样的数据. (这个需要调整 API 中的 `recent` 方法)