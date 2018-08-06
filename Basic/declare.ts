/**
 * 声明 declare
 * 一般我们使用JavaScript写第三方库时，为了让TypeScript 更好的提示，需要写一个声明文件，来描述这个库所使用的一些数据结构
 * 和普通的定义没有太大区别，但是只有声明，没有实现。
 * 相关实现需要手动 import 就像 react一样
 *
 * 一般来说我们使用 .d.ts 作为声明文件的后缀名 => 每个文件都应该有个type的后缀名如 .api.t(j)s  .util.t(j)s
 */


declare interface Person {
    name: string;
    age: number;
}

declare const $: (selector: string) => any;

/**
 * 前面提过的重载，这里叫做声明合并
 */
declare function sum(x: number, y: number): number;
declare function sum(x: string, y: string): string;
