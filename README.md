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

## Demo
* 通过 docker 将其部署到 Daocloud.io 上. [Ember-RC](http://ember-rc.daoapp.io/) (详情见 dockerfile branch)
* Ember.js 部署 Daocloud.io 上, 但是所有的 API 调用都是从使用者当地的网络发出, 速度与 API 的 Endpoint 有关与 Ember.js 部署服务器位置无关.
* 因为 API 提供的功能与 [Ruby China](https://ruby-china.org) 页面直接 render 的数据提取算法不一样, 所以会看到不一样的数据. (这个需要调整 API 中的 `recent` 方法)
