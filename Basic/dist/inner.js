/**
 * 内置对象
 * tsconfig 文件中的 compilerOptions 对象的 lib 属性指向的就是我们所依赖的内部的库
 * 如 bom/dom对象等
 * 通过阅读lib代码，也可以更好的理解学习这些通用的库
 */
var input = document.createElement('input');
input.addEventListener('click', function (e) {
    // Do something
});
var body = document.body;
body.appendChild(input);
