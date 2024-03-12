let x: [string, number];
x = ["a", 10];

enum Color {
    Red,
    Blue,
    Green,
}
console.log(Color.Red);

function err(): never {
    throw new Error("err");
}
