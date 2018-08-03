/**
 * 定义对象的类型
 * 对行为的抽象，具体的行为要由类(class)去实现(implements)
 */

interface Person {
    age: number;
    name: string;
    sex: 'male' | 'female';
    rich: boolean;
    hasGirlFriend: () => boolean;
}

const aXiang: Person = {
    age: 24,
    name: "ChenXianWei",
    sex: 'male',
    rich: true,
    hasGirlFriend: () => false,
};

interface HandsomePerson extends Person{
    handsome: boolean;
}

const changAn: HandsomePerson = {
    age: 26,
    name: 'WangCan',
    sex: 'male',
    rich: false,
    handsome: true,
    hasGirlFriend: () => true,
};

class AEndPeople implements HandsomePerson{
    constructor(
        public age: number,
        public name: string,
        public sex: 'male' | 'female',
        public rich: boolean,
        public handsome: boolean,
        public email?: string,
    ){}
    hasGirlFriend() {
        return this.rich;
    }
}
