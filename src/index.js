/**
 *const,letの変数宣言
 */
// var vall = "var変数";
// console.log(vall);

// //varは上書き可能
// vall = "var変数を上書き";
// console.log(vall);

// //var は再宣言可能

// var vall = "var変数を再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);
// //let を再宣言不可能
//  val2 = "let変数を再宣言";
// let console.log(val2);

// const val3 = "const変数";
// console.log(val);

// //const変数は上書き不可能
// val = "const変数を上書き";
// const val3 = "const変数を再宣言";

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// val4.name = "じゃけ";
// val4.address = "Hiroshima";
// console.log(val4);

// // //constで定義したオブジェクトはプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけえ";
// const age = 28;
// //「私の名前はじゃけえです。年齢は２８歳です。」
// const massage = `「私の名前は${name}です。年齢は${age}です。」`;
// console.log(massage);

// /**
//  * アロー関数
//  */
// // function func1(str) {
// //   return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数

// const func2 = (str) => str;
// console.log(func2("fuc2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 5));

/**
 * 分割代にゅう
 */
// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳でごわす。`;
// console.log(message1);
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳で~す。`;
// console.log(message2);

// const myProfile = ["じゃけぇ", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳で~す。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
// sayHello();

/***
 * スプレッド構文...
 */
// //配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// //sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1)

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3)
//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 88;
// // const arr7 = [...arr4, ...arr5];
// // //[]に入れてるから配列を合体させてるようなもん
// // //arr = [arr3] みたいな形だと　[array]]ってなるんだね
// console.log(arr6);
// //スプレッド構文を使えば参照渡しではなくなる。
// console.log(arr4);
// // console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
