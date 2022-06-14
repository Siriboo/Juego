const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";

const empate = 0;
const gano = 1;
const perdio = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijerasBtn = document.getElementById("tijeras");
const resultText = document.getElementById("start-text");
const usuarioImg = document.getElementById("img-usuario");
const machineImg = document.getElementById("img-machine");

piedraBtn.addEventListener("click", ()=>{
    play(piedra);
})
papelBtn.addEventListener("click", ()=>{
    play(papel);
})
tijerasBtn.addEventListener("click", ()=>{
    play(tijeras);
})

function play(opcionUsuario){
    const machineOption = calcMachineOption();
    const result = calcResult(opcionUsuario, machineOption)

    usuarioImg.src = "img/"+opcionUsuario+".png";
    machineImg.src = "img/"+machineOption+".png";

    switch(result){
        case empate:
            resultText.innerHTML = "Usted ha empatado!";
            break;
        case gano:
            resultText.innerHTML = "Usted ha ganado!";
            break;
        case perdio:
            resultText.innerHTML = "Usted ha perdido!";
            break;
    }
}

function calcMachineOption(){
    const numero = Math.floor(Math.random() * 3);
    switch (numero){
        case 0:
            return piedra;
            case 1:
                return papel;
                case 2:
                    return tijeras
    }
}


function calcResult(opcionUsuario, machineOption){
    if(opcionUsuario === machineOption){
        return empate;

    }else if(opcionUsuario === piedra){  

        if(machineOption === papel) return perdio;
        if(machineOption === tijeras) return gano;

    }else if(opcionUsuario === papel){

        if (machineOption === tijeras) return perdio;
        if(machineOption === piedra) return gano;

    }else if(opcionUsuario === tijeras){

        if (machineOption === piedra) return perdio;
        if(machineOption === papel) return gano;
    }
}
