document.getElementById("b").addEventListener("click",generateRand);

const arr=[21,18,55,87,46,97,36,7,89,15,32,45,77,64,79] 
var index = 0;
function generateRand(){
    let number = arr[index++];
    document.getElementById('number').innerText = number;
}
