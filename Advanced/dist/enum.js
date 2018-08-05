/**
 * 枚举 Enum 用于取值限定在一定范围的场景。
 * 联想到刚才的字符串字面量类型
 */
var Day;
(function (Day) {
    Day[Day["Sun"] = 0] = "Sun";
    Day[Day["Mon"] = 1] = "Mon";
    Day[Day["Tue"] = 2] = "Tue";
    Day[Day["Wed"] = 3] = "Wed";
    Day[Day["Thu"] = 4] = "Thu";
    Day[Day["Fri"] = 5] = "Fri";
    Day[Day["Sat"] = 6] = "Sat";
})(Day || (Day = {}));
console.log(Day.Sun); // 0
/**
 * 枚举成员会被赋值为从0开始的数字
 * 也可以进行手动赋值
 */
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Yellow"] = "Yellow";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
