/**
 * 字符串字面量类型 String literal type
 * 因为typescript 的类型推导，我们可以通过联合类型取限制变量的取值
 */
var testString = 'A';
// const testString1: 'A' | 'B' | 'C' = 1; //Error:(7, 7) TS2322: Type '1' is not assignable to type '"A" | "B" | "C"'.
/**
 * 扩展到其他的类型
 */
var testLimitedStringOrNumber = 1;
// const testLimitedStringOrNumber1: 'A' | 1 = 2; //Error:(14, 7) TS2322: Type '2' is not assignable to type '"A" | 1'.
/**
 * 联想到 交叉类型
 * 这里应该很难找到示例吧
 */
/**
 * 另一个疑问，这样直接去写string常量去实现类型不是很方便
 * 我们可以使用Enum来表示常量
 */
var GradeEnum;
(function (GradeEnum) {
    GradeEnum[GradeEnum["A"] = 0] = "A";
    GradeEnum[GradeEnum["B"] = 1] = "B";
    GradeEnum[GradeEnum["C"] = 2] = "C";
})(GradeEnum || (GradeEnum = {}));
var testEnum = GradeEnum.A;
var GradeEnumString;
(function (GradeEnumString) {
    GradeEnumString["A"] = "A";
    GradeEnumString["B"] = "B";
    GradeEnumString["C"] = "C";
})(GradeEnumString || (GradeEnumString = {}));
var testStringEnum = GradeEnumString.A;
