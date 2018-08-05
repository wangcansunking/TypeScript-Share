/**
 * 类型断言
 * 强制告诉编译器当前的变量是什么类型，强制进行类型转换
 * 两种写法：
 * 1. <Type>value 推荐写法
 * 2.value as Type
 */
/**
 * <Type>value 推荐的写法。
 * 获取数字或者字符串的长度
 */
function getLength(s) {
    if (typeof s === 'string') {
        return s.length;
    }
    else {
        return s.toString().length;
    }
}
/**
 * <Type>value
 */
function getLength1(s) {
    return s.length || s.toString().length;
}
/**
 * as
 */
function getLength2(s) {
    var tempS = s;
    return tempS.length || tempS.toString().length;
}
