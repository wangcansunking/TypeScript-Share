/**
 * 枚举 Enum 用于取值限定在一定范围的场景。
 * 联想到刚才的字符串字面量类型
 */

enum Day {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
}

console.log(Day.Sun); // 0
/**
 * 枚举成员会被赋值为从0开始的数字
 * 也可以进行手动赋值
 */

enum Color {
    Red = 'Red',
    Yellow = 'Yellow',
    Blue = 'Blue',
}

