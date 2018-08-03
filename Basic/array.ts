/**
 * 数组类型的声明有多种（T是泛型，泛型是指根据传入的类型来指定类型）
 * 1. T[] (推荐)
 * 2. Array<T> => 可以用来限定数组长度 Array<T>(length)
 * 3. [T] 限定数组内容和长度的定义 => 元组(Tuple)
 * 4. 接口表示数组
 */

interface InterfaceArray {
    [index: number]: number;
}


