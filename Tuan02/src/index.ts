//cau 1
// function sayHelloAsync(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Hello async!`);
//         }, 2000);
//     });
// }

// sayHelloAsync().then((message) => {
//     console.log(message);
// });

// async function run(){
//   const msg = await sayHelloAsync();
//   console.log(msg);
// }

// run();

// Câu 2: Hàm trả về Promise resolve với số 10 sau 1 giây
function returnTen(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

// Dùng .then()
returnTen().then((num) => {
    console.log("Trả về với then:", num);
});

// Hoặc dùng async/await
async function runReturnTen() {
    const num = await returnTen();
    console.log("Trả về với async/await: ", num);
}

runReturnTen();
