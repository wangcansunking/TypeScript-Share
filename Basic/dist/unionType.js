/**
 * 联合类型表示赋值可以是多种类型中的一种
 * 用来做类型兼容
 */
var numberOrString;
numberOrString = 123;
numberOrString = '123';
/**
 * 但是这里有个问题，不同的类型拥有不同的属性和方法
 * 联合类型只能去取公用的属性和方法，否则会报错。
 */
var numberOrString1;
/*
    Error:(14, 17) TS2339: Property 'length' does not exist on type 'string | number'.
    Property 'length' does not exist on type 'number'.
 */
// numberOrString1.length;
/**
 * 这个时候怎么解决呢？
 * 类型强制转换
 */
numberOrString1.length;
