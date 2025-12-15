import fs from 'fs';



// 동기적으로 실행 시 문제가 심각, 왜? 
// 웹 서버 통신이나 사용자 이벤트 처리시 정지 가능성이 상당히 높다.
// const file=fs.readFileSync('textfile.txt');
// console.log(file);
// console.log(file.toString());

// 대부분 웹에서는 비동기적
// thread를 이용하는 방법이 있음
// thread를 사용하면 한 번에 여러 줄을 읽어 들여 실행

// fs.readFile의 정확한 의미는 파일을 읽어들이는 이벤트를 등록하는 메서드
// 해당 시점에서는 이벤트만 등록하고 곧바로 코드를 진행해버림


// const file=fs.readFile('textfile.txt', (error, file) => {
//     console.log(file);
//     console.log(file.toString());
// });


// const file2 = fs.readFile('textfile.txt', () => {
//     console.log('hi1');
// })
// console.log('hi2');

// const a = fs.readFileSync('a.txt');
// const b = fs.readFileSync('b.txt');
// const c = fs.readFileSync('c.txt');

// console.log(a, b, c);

import async from "async";

async.parallel([
    (callback) => {fs.readFile('a.txt', callback);},
    (callback) => {fs.readFile('b.txt', callback);},
    (callback) => {fs.readFile('c.txt', callback);},
], (error, results) => {
    console.log(results);
});