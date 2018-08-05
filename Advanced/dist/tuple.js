/**
 * 元组 Tuple
 * 我们之前的数组合并了同类型的对象，元组合并了不同类型的对象
 */
var testTuple = ['a', 1];
/**
 * 当我们对越界的元素赋值时，类型会被限制为已有类型的联合类型
 */
testTuple.push('123');
// testTuple.push(true); //Error:(13, 16) TS2345: Argument of type 'true' is not assignable to parameter of type 'string | number'.
/**
 * 总体而言，这些都是TypeScript的类型推论
 */
