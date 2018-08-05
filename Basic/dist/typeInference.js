/**
 * 在声明变量时，如果没有声明类型。并且在声明时便赋值了。
 * 这个时候Typescript 会根据后面值得规则推断出一个类型
 **/
var typeInferenceString = '123'; //等价于 let typeInferenceString: string = '123'
// typeInferenceString = 123; // Error:(7, 1) TS2322: Type '123' is not assignable to type 'string'.
