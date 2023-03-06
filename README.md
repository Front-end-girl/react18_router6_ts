1. Error: "prettier/@typescript-eslint" has been merged into "prettier" in eslint-config-prettier 8.0.0
.eslintrc.cjs
prettier/@typescript-eslint 换成prettier

2. 解决引入svg报错
添加 types
global.d.ts
```
declare module '*.svg' {
    const content: string

    export default content
}
```
