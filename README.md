<!--This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).-->


### 分支介绍

### master

react16 + react-router-4 + redux + antd + scss
是比较基础的一个配置
在 config-overrides.js里面可以配置antd的主题

### mfe 
react16 + react-router-4 + redux + antd + scss + postcss + flex+ rem + vw + better-scroll
针对移动端h5适配，支持不同的适配方案

### react-cli-map
react16 react16 + react-router-4 + redux+antd+scss+ react-router-4 + redux+antd+scss
引入mapBox-gl-js,针对地图项目



不同的分支有对应的README，请自行切换分支进行查看

以下针对master
```
git clone git@github.com:myuanyuan/react-cli.git
cd react-cli
npm install
```

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  config/
    env.js
    paths.js
    polyfills.js                // polyfills, you can add sth if you need
    presets.js                  // plugins, you can add sth if you need
    webpack.config.dev.js       // the webpackConfig for dev
    webpack.config.prod.js      // the webpackConfig for prod
    webpackDevServer.config.js
    jest/
      babelTransform.js
      cssTransform.js
      fileTransform.js

  public/
    index.html
    favicon.ico
    manifest.json
    api.js
  scripts/
    build.js
    eject.js
    init.js
    start.js
    test.js
    utils/
      createJestConfig.js

  src/                      //  your project
  config-overrides.js       // enjoy yourself wakaka, for example change the theme of antd
  .babelrc
    
```

### todo List
原本想做ts版本的，不过后来想想毕竟前端用ts还是非常少的，而且确实没心情了，放弃了
[x] 针对移动端进行各种方式适配 
[x] 针对地图类
[ ] 提升redux 引入 reselect
[ ] 文档写好一点
[ ] 我再想想...


如果需要更多配置请参考[create-react-app-react-scripts](https://github.com/myuanyuan/create-react-app-react-scripts)

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


