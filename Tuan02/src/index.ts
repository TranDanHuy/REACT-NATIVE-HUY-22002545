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
// function returnTen(): Promise<number> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(10);
//         }, 1000);
//     });
// }

// Dùng .then()
// returnTen().then((num) => {
//     console.log("Trả về với then:", num);
// });

// Hoặc dùng async/await
// async function runReturnTen() {
//     const num = await returnTen();
//     console.log("Trả về với async/await: ", num);
// }

// runReturnTen();

// Câu 3: 
// function throwError(): Promise<never> {
//     return new Promise((_, reject) => {
//         setTimeout(() => {
//             reject(new Error("Something went wrong"));
//         }, 1000);
//     });
// }

// Dùng .then() và .catch()
// throwError()
//     .then(() => {
//         console.log("This will not run");
//     })
//     .catch((err) => {
//         console.error("Caught error with then/catch:", err.message);
//     });

// Dùng async/await với try/catch
// async function runThrowError() {
//     try {
//         await throwError();
//     } catch (err: any) {
//         console.error("Caught error with async/await:", err.message);
//     }
// }

// runThrowError();

// Câu 4:
// function randomNumberPromise(): Promise<number> {
//     return new Promise((resolve, reject) => {
//         const num = Math.random();
//         if (num >= 0) resolve(num);
//         else reject("Random number < 0"); 
//     });
// }

// randomNumberPromise()
//     .then((num) => {
//         console.log("Random number:", num);
//     })
//     .catch((err) => {
//         console.error("Error getting random number:", err);
//     });

// Câu 5:
function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

// Dùng async/await test
async function runSimulateTask() {
    const res = await simulateTask(500);
    console.log(res);
}
runSimulateTask();
