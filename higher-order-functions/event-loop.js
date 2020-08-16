let flag = false;
setTimeout(() => {
    // this callback never gets called
    // because event loop is blocked
    flag = true;
}, 1000);

while (!flag) {
    console.log("still waiting")
}