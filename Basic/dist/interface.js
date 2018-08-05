/**
 * 定义对象的类型
 * 对行为的抽象，具体的行为要由类(class)去实现(implements)
 */
var aXiang = {
    age: 24,
    name: "ChenXianWei",
    sex: 'male',
    rich: true,
    hasGirlFriend: function () { return false; },
};
var changAn = {
    age: 26,
    name: 'WangCan',
    sex: 'male',
    rich: false,
    handsome: true,
    hasGirlFriend: function () { return true; },
};
var AEndPeople = /** @class */ (function () {
    function AEndPeople(age, name, sex, rich, handsome, email) {
        this.age = age;
        this.name = name;
        this.sex = sex;
        this.rich = rich;
        this.handsome = handsome;
        this.email = email;
    }
    AEndPeople.prototype.hasGirlFriend = function () {
        return this.rich;
    };
    return AEndPeople;
}());
