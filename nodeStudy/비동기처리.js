import fs from 'fs';

// fs.writeFileSync('my.txt', '안녕하세요\n 하이 hi');
// console.log('완료');

// fs.writeFile('my2.txt', '안녕하세요\n 하이하이', (error) => {
//     console.log('완료1', error);
// });
// console.log('완료2');

fs.readFile('textfile2.txt', (error, file) => {
        if(error){
            console.log('파일을 읽는 데에 오류가 있습니다.')
            console.log(error.toString())
        }
        else{
            console.log(file.toString())
        }
});