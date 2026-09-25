const myElement = document.getElementById("coolText")
var i = 0;
while (true) {
    i++;
    myElement.textContent = i;

    new Promise(resolve => setTimeout(resolve, 1000))
}
