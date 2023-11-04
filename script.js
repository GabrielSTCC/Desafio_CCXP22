const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "30 nov 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const totalSeg = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(((totalSeg / 60) / 60) / 24);
    const finalHoras = Math.floor((totalSeg / 60) / 60) % 24;
    const finalMinutos = Math.floor(totalSeg / 60) % 60;
    const finalSegundos = Math.floor(totalSeg) % 60;

    dia.innerHTML = finalDias +`D`
    hora.innerHTML = formatoTempo(finalHoras) +`H`
    minuto.innerHTML = formatoTempo(finalMinutos) +`M`
    segundo.innerHTML = formatoTempo(finalSegundos) +`S`
}

function formatoTempo(temp){
    return temp < 10? `0${temp}` : temp;
}

countDown();
setInterval(countDown, 1000)