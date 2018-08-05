/**
 * 字符串字面量类型 String literal type
 * 因为typescript 的类型推导，我们可以通过联合类型取限制变量的取值
 */

const testString: 'A' | 'B' | 'C' = 'A';
// const testString1: 'A' | 'B' | 'C' = 1; //Error:(7, 7) TS2322: Type '1' is not assignable to type '"A" | "B" | "C"'.

/**
 * 扩展到其他的类型
 */

const testLimitedStringOrNumber: 'A' | 1 = 1;
// const testLimitedStringOrNumber1: 'A' | 1 = 2; //Error:(14, 7) TS2322: Type '2' is not assignable to type '"A" | 1'.

/**
 * 联想到 交叉类型
 * 这里应该很难找到示例吧
 */

/**
 * 另一个疑问，这样直接去写string常量去实现类型不是很方便
 * 我们可以使用Enum来表示常量
 */

enum GradeEnum {
    A, B, C,
}

const testEnum: GradeEnum = GradeEnum.A;

enum GradeEnumString {
    A = 'A',
    B = 'B',
    C = 'C',
}

const testStringEnum: GradeEnumString = GradeEnumString.A;
