
### 版本要求
- `vue cli`版本需要node 8.9 或者更高的版本。


### 启动项目
 ```
  git clone https://github.com/MrZHLF/vue3.0-vant-h5.git

  cd vue3.0-vant-h5

  npm install 或者使用 cnpm 切换到淘宝镜像

  cnpm run serve
 ```

### 目录

 ```
  |———— public index.html文件
  |———— src
  |     |———— api        #api接口请求
  |     |———— assets     #资源目录
  |     |———— components #公共组件封装
  |     |———— config     #环境变量配置
  |     |———— layout     #主目录
  |     |———— router     #路由
  |     |———— store      #状态管理
  |     |———— util       #工具类
  |     |———— views      #组件以及页面文件目录
  |     |———— App.vue    #项目入口文件
  |     |———— main.js    #项目核心文件
  |———— .env.development #本地环境配置
  |———— .env.production.js #正式环境配置
  |———— postcss.config   #PostCSS 配置
  |———— babel.config.js  #babel常用配置
  |———— vue.config.js    #vue常用配置项
  |———— package.json     #项目配置文件
  |———— README.md        #项目的说明文档，markdown 格式
```
