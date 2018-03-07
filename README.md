<!--This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).-->

## mfe 
### 针对移动端 使用postcss vw 适配
hahaha... 


### 适配方案
相信大家对rem和flex布局都很熟悉了，这里就不详细介绍了,只聊vw

配置变动：
```
{
  loader: require.resolve('postcss-loader'),
  options: {
    config: {
      path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
    },
    // Necessary for external CSS imports to work
    // https://github.com/facebookincubator/create-react-app/issues/2677
    ident: 'postcss'
    // plugins: () => [
    //   require('postcss-flexbugs-fixes'),
    //   autoprefixer({
    //     browsers: [
    //       '>1%',
    //       'last 4 versions',
    //       'Firefox ESR',
    //       'not ie < 9', // React doesn't support IE8 anyway
    //     ],
    //     flexbox: 'no-2009',
    //   }),
    // ],
  },
},
```
根目录新建 postcss.config.js
```
module.exports = {
    "plugins": [
        require('postcss-flexbugs-fixes'),
        require("autoprefixer")({
            browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
        }),
        require("postcss-aspect-ratio-mini"),
        require("postcss-write-svg")({ utf8: false }),
        require("postcss-cssnext"),
        require("postcss-px-to-viewport")({
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore', '.hairlines'],
            minPixelValue: 1,
            mediaQuery: false
        }),
        require("postcss-viewport-units"),
        require("cssnano")({
            preset: "advanced",
            autoprefixer: false,
            "postcss-zindex": false
        })

    ]
}
```
上面的配置中，postcss-px-to-viewport可以然我们像原来一样去写px

viewportWidth和viewportHeight的配置根据你们家ui给出的设计稿来定就好了。

postcss-write-svg插件主要通过使用border-image和background来做1px的相关处理。比如
我们先写一个1像素边框
```
@svg 1px-border {
  height: 2px; 
  @rect { 
    fill: var(--color, black); 
    width: 100%; 
    height: 50%; 
    } 
  } 
```
在需要的时候就可以这样使用
```
.example { 
  border: 1px solid transparent; 
  border-image: svg(1px-border param(--color #00b1ff)) 2 2 stretch; 
  }
```
当然还有background-image的实现方式，具体参考[postcss-write-svg](https://github.com/jonathantneal/postcss-write-svghttps://github.com/jonathantneal/postcss-write-svg)

安装插件

```
npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano cssnano-preset-advanced --D
```
package.json文件中：
```
"dependencies": {
   "cssnano": "^3.10.0", 
   "postcss-aspect-ratio-mini": "0.0.2", 
   "postcss-cssnext": "^3.1.0", 
   "postcss-px-to-viewport": "0.0.3", 
   "postcss-viewport-units": "^0.1.3", 
   "postcss-write-svg": "^3.0.1", 
   },

```

注意:autoprefixery一次就够了 在cssnano和postcss-cssnext把默认配置改为false，否则会影响性能

接下来，修改 public/index.html
主要有三个地方
1. 修改 meta viewport为了适配iponeX 添加viewport-fit=cover
```
<meta name=viewport content="width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover">
```
2. 引入 viewport-units-buggyfill.hacks的ali cdn 
```
<script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>
```
3. 初始化执行ali cdn的init方法
```
<script>
      window.onload = function () {
        window.viewportUnitsBuggyfill.init({
          hacks: window.viewportUnitsBuggyfillHacks
        });

        var winDPI = window.devicePixelRatio;
            var uAgent = window.navigator.userAgent;
            var screenHeight = window.screen.height;
            var screenWidth = window.screen.width;
            var winWidth = window.innerWidth;
            var winHeight = window.innerHeight;
            alert(
                "Windows DPI:" + winDPI +
                ";\ruAgent:" + uAgent +
                ";\rScreen Width:" + screenWidth +
                ";\rScreen Height:" + screenHeight +
                ";\rWindow Width:" + winWidth +
                ";\rWindow Height:" + winHeight
            )
      }
    </script>
```
另外，还可以通过媒体查询对iphoneX可能出现的兼容问题进行hack，
代码如下：
```
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
   /* iPhone X 独有样式写在这里*/ 
   
}
```
好了，完工

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
引入mapBox-gl-js

针对地图项目

不同的分支有对应的README，请自行切换分支进行查看

以下针对master
```
git clone git@github.com:myuanyuan/react-cli.git
cd react-cli
git checkout -b mfe
npm install
```

### `npm start`
你可以看到你的已经完美转为vw了，现在，在不同尺寸的设备上试一下吧

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`
在打包好之后，运行一遍

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
- [x] 针对移动端进行各种方式适配 
- [x] 针对地图类
- [ ] 提升redux 引入 reselect
- [ ] 文档写好一点
- [ ] 我再想想...


如果需要更多配置请参考[create-react-app-react-scripts](https://github.com/myuanyuan/create-react-app-react-scripts)

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


