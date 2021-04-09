# react-cli

#### 介绍
一个基于 CRA、AntD 的简易脚手架

#### 架构
- 项目采用 `react-create-app` `antd` `axios` `redux` 封装
- css 局部采用 `css Modules` 解决方案

#### 目录结构

```bash
├─src
    │  index.js # 项目入口文件
    │  setupProxy.js # 跨域代理请求
    ├─api # 接口定义
    ├─axios # axios 拦截器封装
    ├─components # 公共组件
    ├─pages # 组件文件
    │  └─login
    │       index.jsx
    │       index.module.less # 示例 css 文件
    ├─router # 路由
    │      index.jsx # 路由配置
    │      options.js # 路由数据源
    ├─store # redux 数据
    └─utils # 公共的方法
```

#### 项目介绍

##### 1. 路径别名

```js
// 项目配置了以下路径别名，根据需要，也可以自行在根目录下 config/webpack.config.js  配置
// @pages      ==> src/pages
// @components ==> src/components
// @axios      ==> src/axios
// @store      ==> src/store
// @router     ==> src/router
// @utils      ==> src/utils
// @api        ==> src/api
```

##### 2. css Modules 使用方式

```jsx
// 例如 index.js 需要使用 less
import styled from './index.module.less'
// jsx
export default function View(){
    return <div className={styled.xxxx}></div>
}
// 名称的规则如不能满足需求 ，请在根目录 config/webpack.config.js 中配置，变量：localIdentName
```

##### 3. 关于路由

路由使用已在 `src/router` 示例做了说明

```js
{
  path: "/",
  component: xxxx,  // 组件
  meta: {
    isPublicCom: true,  // 如果不需要公共布局
  }
}
```

##### 4. redux 

使用方式和 `redux` 无差异，异步处理采用 `redux-thunk` 

```js
// 需要注意：connect 做了封装，使用如下
import { connect } from '@utils'
connect({ attr: String | Array(String), actionCreators:Object | Array(Object) })(component)
// attr、actionCreators 可以传入单个，也传入数组，数组的作用就是为了方便使用其它组件的数据和store方法
// attr: 对应 reducer 中导出的名称
// actionCreators: @store/xxxx/actions
// component: 当前的组件
```

