// @target: es5
interface I<T> {
    [s: number]: T;
}

declare function foo<T>(obj: I<T>): T

foo({
    101: "",
    0: () => { },
    ["hi" + "bye"]: true,
    [0 + 1]: 0,
    [+"hi"]: [0]
});
