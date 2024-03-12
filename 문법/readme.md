# 식별자

변수 명, 함수 명 같은거

숫자로 시작할 수 없고 공백이 있으면 안된다.

데이터(etring 같은거)는 어떤 경우엔 식별자가 될 수 있다.

```
let x = {
    ['age']: 10,
    ['123 my name']: 'me',
    name: 'Lee'
}

x.age
x['123 my name']
x['name']
```

## 네이밍 컨벤션

상수는 대문자로

camelCase: 각 단어의 첫 글자를 대문자로, 첫번째 단어는 제외. 이거 많이 씀

snake*case: 단어 사이를 *로 구분

# typescript 타입

## 튜플

```
let x:[string, number]
x=['a',10]
```

## enum

```
enum Color {
    Red, Blue, Green
}
Color.Red
```

## never

리턴하지 않는 경우

```
function err(): never{
    throw new Error('err');
}
```
