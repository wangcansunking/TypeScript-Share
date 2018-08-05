/**
 * 类 class
 * 主要介绍与ES6的一些区别
 */

/**
 * 1. 实现接口
 */

interface Named {
    name: string
}
interface Aged {
    age: number
}
class NamedPerson implements Named,Aged{
    name: string = '';
    age: number = 0;
}

/**
 * 2. private public protected
 */
class Animal {
    public name: string;
    private weight: number;
    protected alive: boolean;
}

/**
 * 3. constructor 直接赋值到this
 */

class AgedPerson {
    constructor(public age: number){}
}

/**
 * 4. 抽象类 abstract class
 */

abstract class Dog {
    public name: string;
    public abstract bark();
}

class ChineseDog extends Dog{
    public bark() {
        console.log('汪汪');
    }
}







