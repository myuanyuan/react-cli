<!--This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).-->

mfe 
### 针对移动端 使用postcss vw 适配
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
1. test，被我暂时删除了... 
2. 由于是SPA，存在首次打开较慢的问题---考虑MPA+服务端渲染首页
3. 使用ts---会另建一个project
4. 测试各种性能问题

如果需要更多配置请参考[create-react-app-react-scripts](https://github.com/myuanyuan/create-react-app-react-scripts)

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


