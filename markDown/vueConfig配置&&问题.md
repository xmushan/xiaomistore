```
module.exports={
    publicPath:'/',  //配置根目录，上传访问目的的时候用到，比如www.sina.com/china/,这个/china/就是要额外配置的，写成publicPath:'/china/'
    outputDir:'dist',  //构建输出目录
    //assetsDir:"assets",  //静态资源目录（js,css,image）
    lintOnSave:false,//是否开启eslint检测,false不开启，有效值：true || false
    productionSourceMap:false,//生成环境下面开启sourceMap支持断点调试
    devServer:{
        open:true, //是否启动打开浏览器
        host:"localhost",//主机，0.0.0.0支持局域网地址，可以用真机测试
        port:8080, //端口
        https:false,//是否启动https
        productionSourceMap:false,//配置生产环境下面的source-map
        //配置跨域代理
        proxy:{
            "/api":{
                target:"http://vueshop.glbuys.com/api",
                changeOrigin:true,
                pathRewrite:{
                    '^/api':""
                }
            }
        }
    }
 
};
```
### 启动项目报错
1. **执行Vue项目时报错Vue ERROR TypeError: Cannot read property ‘upgrade’ of undefined？**

 给vue项目增加了本地代理，也就是给vue.config.js增加了devServer之后，启动项目报错：
 >*Vue ERROR TypeError: Cannot read property ‘upgrade’ of undefined*

 >这个错误实际上时因为代理地址为空导致的，检查后发现proxy属性中的target的值为空，没有填入，填入后解决错误！



### package.json中依赖的区别
> dependencies：项目依赖。在编码阶段和呈现页面阶段都需要的，也就是说，项目依赖即在开发环境中，又在生产环境中。如js框架vue、页面路由vue-router，各种ui框架antd、element-ui、vant等。

> devDependencies: 开发依赖。仅仅在写代码过程中需要使用，比如css预处理器、vue-cli脚手架、eslint之类。


