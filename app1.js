var c = 0;
var count = document.querySelector('.count');
function increment(){
    c++;
    count.innerText=c;
}
function decrement(){
    c--;
    count.innerText=c;
}
function reset(){
    c=0;
    count.innerText=c;
}