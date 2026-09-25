const myElement = document.getElementById("coolText")

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
    var i = 0;
while (true) {
    i++;
    console.log(myElement);
    myElement.textContent = i;
    if (i>1000) {
        break;
    }
    await sleep(1000);
}


}
main();
