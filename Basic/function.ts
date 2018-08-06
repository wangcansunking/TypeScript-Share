/**
 * 一等公民函数 => 函数也是一种类型。
 * 1. 函数声明
 * 2. 函数表达式
 * 3. 接口定义函数形状
 */

function sum(x, y) {
    return x + y;
}

const sum1 = function (x, y) {
    return x + y;
};

/**
 * 函数声明
 */

function sumNumber(x: number, y: number): number {
    return x + y;
}

// sumNumber(1, '2');

/**
 * 函数表达式
 */

const sumString: (x: string, y: string) => string = (x: string, y: string) => {
    return x + y;
};

// sumString(1, '2');

/**
 * 接口定义函数形状
 */

interface SumFunc {
    (x: number, y: number): number; //动态语言的写法
}

const sumNumberInterface: SumFunc = (x, y) => x + y;

// sumNumberInterface(1, '2');

/**
 * 重载 overload -> 重写 override
 * 重载 overload 是指名字相同，参数不同的方法，不会覆盖。函数名和参数共同组成函数的签名。
 * 重写 override 是指名字相同的函数，作用域越近的声明会覆盖作用域较远的声明。子类的方法覆盖父类的方法。
 *
 * 重载允许函数接受不同的参数，做出不同的处理。
 * 比如上面的sum， 输入number时应该输出number。输入string时输出string
 * 但是JavaScript函数是重写的机制（暂不讨论变量提升）
 * 使用TypeScript可以做到函数声明的重载，这在一些API库的声明文件中很有用，比如react。
 * 但是我也没用过，后面的 声明 我们会进行讨论。
 * 相关讨论
 * https://segmentfault.com/q/1010000006772350
 * https://www.zhihu.com/question/63751258
 */
