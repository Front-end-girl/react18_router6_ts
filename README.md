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
   定义router文件
   引入main.ts BrowserRouter
   懒加载路由
