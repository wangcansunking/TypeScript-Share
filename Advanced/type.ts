/**
 * 类型别名 Type Alias
 * 给类型取一个新的名字
 * 关键字 type
 */
type Name = string;

type Resolver = () => string;

type NameOrResolver = Name | Resolver;

type Person = {
    name: string;
    age: number;
}

/**
 * type 和 interface的区别
 * 1. interface可以extends和implements
 * 2. interface可以实现merge
 */

