const myElement = document.getElementById("coolText")
var i = 0;
while (true) {
    i++;
    console.log(myElement)
    myElement.textContent = i;

    new Promise(resolve => setTimeout(resolve, 1000))
}
