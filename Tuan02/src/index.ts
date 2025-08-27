//cau 1
function sayHelloAsync(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello async!`);
        }, 2000);
    });
}

sayHelloAsync().then((message) => {
    console.log(message);
});

async function run(){
  const msg = await sayHelloAsync();
  console.log(msg);
}

run();