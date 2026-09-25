const myElement = document.getElementById("coolText")

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

var i = 0;
while (true) {
    i++;
    console.log(myElement);
    myElement.textContent = i;

    sleep(1000);    
}
