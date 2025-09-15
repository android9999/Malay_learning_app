let i;
let hint;
let hint_button;
let risposta;
let frase;
let repetition_label;
let frasi_malesi =
[
    "Yati suka bermain dengan Yaya yang selalu ceria",
    "Yadi membantu Yati yang penat selepas sekolah",
    "Yaya menunggu Yadi yang datang bersama Yati"
]

let frasi_italiane =
[
    "Yati ama giocare con Yaya che è sempre allegra",
    "Yadi aiuta Yati che è stanca dopo la scuola",
    "Yaya aspetta Yadi che arriva insieme a Yati"
]

let repetitions;
let times;

function hide(){
    document.getElementById("app").style.display = "none";
}

function start(){

    repetition_label = document.getElementById("repetitions");
    
    repetitions = repetition_label.value;
    repetition_label.style.display = "none";
    document.getElementById("app").style.display = "block";
    document.getElementById("start").style.display = "none";
    risposta = document.getElementById("risposta");
    i=0;
    hint = document.getElementById("hint");
    frase = document.getElementById("frase");
    frase.innerHTML= frasi_italiane[i];
    times=0;
    hint_button = document.getElementById("hint_button").children[0];
}

function skip(){

    risposta.value = "";
    nascondi_indizio()
    times = 0;
    i++;
    if(i == frasi_malesi.length){
        alert("hai vinto");
    }

    frase.innerHTML= frasi_italiane[i] 
}

function controlla(string1, string2){


    if(string2 == string1){

        times++;
        risposta.value = "";
        nascondi_indizio();
        if(times >= repetitions){
            times = 0;
            i++;
            if(i == frasi_malesi.length){
                alert("hai vinto");
            }

            frase.innerHTML= frasi_italiane[i]
        }

    }
}

function convalida(string){

    if(event.key == 'Enter'){
            controlla(frasi_malesi[i], string)
    }
}

function mostra_indizio(){
    hint.innerHTML = frasi_malesi[i];
    hint_button.innerHTML = "hide hint";
    hint_button.setAttribute("onclick", "nascondi_indizio()");
}

function nascondi_indizio(){
    hint.innerHTML = "hint";
    hint_button.innerHTML = "show hint"
    hint_button.setAttribute("onclick", "mostra_indizio()");
}