1. Error: "prettier/@typescript-eslint" has been merged into "prettier" in eslint-config-prettier 8.0.0
   .eslintrc.cjs
   prettier/@typescript-eslint 换成 prettier

2. 解决引入 svg 报错
   添加 types
   global.d.ts

```
declare module '*.svg' {
    const content: string

    export default content
}
```

3. 安装路由
   npm install react-router-dom --save
   定义 router 文件
   引入 main.ts BrowserRouter
   懒加载路由

4. 左右翻页 研究组件实现原理
   安装 npm install react-animated-router@latest --save
   安装 npm install react-transition-group --save
   <a>https://www.npmjs.com/package/react-animated-router</a>

5. 安装缓存组件 react-activation 对指定的软件

```
  <KeepAlive>
                <Form></Form>
  </KeepAlive>
```
6. input 光标不闪烁
7. 测试 ssh
