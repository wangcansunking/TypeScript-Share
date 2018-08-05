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

function getLength(s: string | number): number {
    if (typeof s === 'string') {
        return s.length;
    } else {
        return s.toString().length;
    }
}

/**
 * <Type>value
 */
function getLength1(s: string | number): number {
    return (<string>s).length || s.toString().length;
}

/**
 * as
 */
function getLength2(s: string | number): number {
    const tempS = s as string;
    return tempS.length || tempS.toString().length;
}
