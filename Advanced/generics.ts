/**
 * 泛型(Generics) 是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候在指定类型的一种特性
 * Java中有广泛的应用
 */

/**
 * Simple Example
 */
interface Animal {
    color: 'red' | 'yellow' | 'blue'
}
interface Dog extends Animal {
    name: string;
}

interface Cat extends Animal {

}

function nameAnimal<T extends Animal> (animal: T, name: string): T {
    animal.name = name;
    return animal;
}

/**
 * 多个泛型参数
 */
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]

/**
 * 泛型的应用场景很多，尤其是一些复杂的库中
 */



