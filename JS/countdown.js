const countdown = document.querySelector('#countdown')


var mm = 00
var hh = 00
var ss = 00

var time = 1000

//Quando usuario tocar no play
function Play() {
    //Countdown's value begin decread
    setInterval(Timer(),1000)
    //When the value became 0
        //(Nothng happends yet)
}
   
//Quando o usuario tocar no pause
function Stop() {
    
}

//Quando o usuario tocar no reiniciar
function Restart() {
    
}

// Função que vai modificar o numero do cronometro 
function Timer() {
    var temp = countdown.innerText.split(':')
    let m = Number(temp[0])
    let s = Number(temp[1])
    if(s != 00){
        s-1;
    }else if(s == 00){
        m-1;
        s = 59;
    }else if(m == 00){
        alert('cabou o tempo');
    }
}

