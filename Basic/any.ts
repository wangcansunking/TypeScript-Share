/**
 * 一旦一个变量被声明类型后，在赋值过程中改变类型是不被允许的。
 */
let numberVal: number = 123;
// numberVal = '123'; // Error:(2, 1) TS2322: Type '"123"' is not assignable to type 'number'.

/**
 * 解决这种问题，Typescript中有很多解决方法
 * 1. Any
 * 2. 联合类型
 * 3. 泛型？
 */

let anyVal: any = 123;
anyVal = '123';

/**
 * 未被声明类型的变量会被识别为 Any类型
 */
let undefinedTypeVal;
undefinedTypeVal = 123;
undefinedTypeVal = '123';

/**
 * 但是在声明时赋值的变量会被识别为值得类型。因为 类型推断(Type Inference)
 */
let undefinedTypeVal1 = 123;
// undefinedTypeVal1 = '123'; // Error:(28, 1) TS2322: Type '"123"' is not assignable to type 'number'.

/**
 * 在声明为Any类型的变量上可以调取任意属性和方法
 * 只会在执行时才会判断
 * 这是Typescript去改写Javascript项目的快速方法
 */
let anyVal1: any = 123;
anyVal1.test(); // 编译时不报错，但是执行时报错

