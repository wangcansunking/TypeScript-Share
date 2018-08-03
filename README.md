# Typescript Share

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


