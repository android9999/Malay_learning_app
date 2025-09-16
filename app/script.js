
let frasi_malesi =
[
    "Yati suka bermain dengan Yaya yang selalu ceria", //yang
    "Yadi membantu Yati yang penat selepas sekolah",
    "Yaya menunggu Yadi yang datang bersama Yati", 
    "Yati dan Yaya sudah sampai di rumah", //dan
    "Yadi dah makan nasi goreng pagi tadi",
    "Dak kecil itu bermain dam dengan kawannya di taman",
    "\"Daa, Yati dah menang main dam, dan Dak kecil itu kalah,\" kata Yadi sambil ketawa"
]

let frasi_italiane =
[
    "Yati ama giocare con Yaya che è sempre allegra",
    "Yadi aiuta Yati che è stanca dopo la scuola",
    "Yaya aspetta Yadi che arriva insieme a Yati",
    "Yati e Yaya sono già arrivate a casa",
    "Yadi ha già mangiato riso fritto stamattina",
    "Quel bambino piccolo gioca a dama con il suo amico al parco",
    "\"Ehi, Yati ha già vinto a dama, e quel bambino ha perso,\" disse Yadi ridendo"
]





let i;
let hint;
let hint_button;
let risposta;
let frase;
let repetitions;
let times;
let password;

function convalidate_password(password){

    alert(password);

    switch (password) {
        case "dan":
            i=3;
            break;
        default:
            i=0;
    }
}

function hide(){
    document.getElementById("app").style.display = "none";
}

function start(){

    document.getElementById("app").style.display = "block";
    hint_button = document.getElementById("hint_button").children[0];
    risposta = document.getElementById("risposta");
    hint = document.getElementById("hint");
    frase = document.getElementById("frase");


    document.querySelectorAll(".starting_menu").forEach(el => el.style.display = "none");

    convalidate_password(document.getElementById("password").value);


    frase.innerHTML= frasi_italiane[i];
    repetitions = document.getElementById("repetitions").value;
    times=0;
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