/**
 * 类 class
 * 主要介绍与ES6的一些区别
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NamedPerson = /** @class */ (function () {
    function NamedPerson() {
        this.name = '';
        this.age = 0;
    }
    return NamedPerson;
}());
/**
 * 2. private public protected
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
/**
 * 3. constructor 直接赋值到this
 */
var AgedPerson = /** @class */ (function () {
    function AgedPerson(age) {
        this.age = age;
    }
    return AgedPerson;
}());
/**
 * 4. 抽象类 abstract class
 */
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var ChineseDog = /** @class */ (function (_super) {
    __extends(ChineseDog, _super);
    function ChineseDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChineseDog.prototype.bark = function () {
        console.log('汪汪');
    };
    return ChineseDog;
}(Dog));
