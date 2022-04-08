let tipoCartas = ['bobrossparrot.gif','explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif','tripletsparrot.gif'];
function comecarJogo(){
    let totalDeCartas = parseInt(prompt("Com quantas cartas você quer jogar?"));
    while((totalDeCartas%2) !== 0 || totalDeCartas < 4 || totalDeCartas > 14){
        totalDeCartas = parseInt(prompt("Com quantas cartas você quer jogar?"));
        }
    sortearJogo(totalDeCartas);
}

function sortearJogo(totalDeCartas){
    let tiposDeCartas = totalDeCartas/2;
    let tiposDeCartasSorteadas = tiposDeCartas.sort(comparador);
    let cartas = [];
    for(let i = 0; i<tiposDeCartas;i++){
        for(let j=0; j<2; j++){
            cartas.push(`${tiposDeCartasSorteadas[i]}`)
        }
    }

}
let cartasSorteadas = cartas.sort(comparador);

let cartasDoJogo = document.querySelector("main");
for (let k = 0; k<cartasSorteadas.length;k++){
    
}