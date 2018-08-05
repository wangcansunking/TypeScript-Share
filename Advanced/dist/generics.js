/**
 * 泛型(Generics) 是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候在指定类型的一种特性
 * Java中有广泛的应用
 */
function nameAnimal(animal, name) {
    animal.name = name;
    return animal;
}
/**
 * 多个泛型参数
 */
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
/**
 * 泛型的应用场景很多，尤其是一些复杂的库中
 */
