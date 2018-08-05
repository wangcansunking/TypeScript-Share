# TypeScript Share [Reference](https://github.com/xcatliu/typescript-tutorial)

## 什么是TypeScript => Typed JavaScript/EcmaScript

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.

翻译成中文

> TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。

### 为什么选择TypeScript
0. JavaScript的超集，支持ES6规范，也支持部分草案规范
    * 纯TypeScript项目，不需要Babel转码
1. 增加代码的可读性和可维护性
    * 可读性良好的代码是最好的文档
    * 编译期间发现大部分错误
    * 增强IDE功能，代码补全，接口提示等
2. TypeScript 非常包容
    * js文件直接改名为ts文件
    * js和ts文件互相引用
    * 类型自动推论
    * 即使编译报错，也可以生成对应的js文件
    * 兼容第三方库，即使第三方库不是ts写的，也可以编写单独的类型文件（@types/react）
3. 活跃的社区和成熟的库的使用
    * 大部分第三方库都会提供TypeScript的类型定义文件
    * [Angular >= 2](https://github.com/angular/angular) 都是由TypeScript编写的，并使用TypeScript来开始Angular项目
    * 我们在使用的[Antd](https://github.com/ant-design/ant-design/)也已经用TypeScript重构
4. 自身提供了很多基本的类型定义
    * DOM/BOM
    * ES6/ES5
    * ...
5. *更好的理解接口和项目结构

### 一些缺点
1. 学习代价，对比JavaScript，新增了语法和一些类型定义
2. 面向对象思想 接口/泛型/继承/实现/抽象等
3. 增加开发成本，但是对于长期的项目会减少维护成本
4. 和一些库的结合可能不是很完美，有时也会因为版本原因导致一些不兼容

## 安装

### 普通

1. `npm install -D typescript`
2. [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "moduleResolution": "node",
    "jsx": "react",
    "lib": ["es6", "dom"],
    "allowSyntheticDefaultImports": true,
    "allowJs": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "strictNullChecks": true
  },
  "include": [
    "./src/**/*"
  ],
  "exclude": [
    "examples",
    "node_modules",
    "scripts",
    "webpack",
    "jest"
  ],
  "types": [
    "typePatches"
  ]
}

```

### [webpack](https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html#webpack)
1. `npm install -D awesome-typescript-loader` or `npm install -D ts-loader`

2. webpack config 
    ```
        module.exports = {
            resolve: {
                extensions: ['.ts', '.tsx', '.js', '.json']
            },
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        use: [
                            'cache-loader',
                            'awesome-typescript-loader',
                        ]
                    },
                    // other loader 
                ]
            },
            // other config ...
        };
    ```

## TS => JS

### 指定的文件目录 [配置项](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

`tsc sourceFile(directory) sourceFile(directory) ...`

### 根据配置文件 `tsconfig.json`

`tsc`

## 语法介绍和实践

### Basic
### Advanced
### With React


