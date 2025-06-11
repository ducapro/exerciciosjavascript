var relogio = document.querySelector("p");

function atualiza_hora(){
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    relogio.innerHTML = horas +  ":" + minutos + ":" + segundos;
}

setInterval(atualiza_hora, 1000);
atualiza_hora();
