let listemot= new Array();
let motcache= "";
let playedchar = new Array(26);
let played= 0;
let nbplayed=0;
let pieces = new Array(5);
let table = new Array(motcache.lenght);
let affiche = new Array(motcache.length);

// On définit les images du pendu
pieces[0] = "pendu1.png"
pieces[1] = "pendu2.png"
pieces[2] = "pendu3.png"
pieces[3] = "pendu4.png"
pieces[4] = "pendu5.png"
listemot[0] = "sodomie";
listemot[1] = "doublepenetration";
listemot[2] = "gangbang";
listemot[3] = "levrette";
listemot[4] = "MILF";
listemot[5] = "Bukkake";
listemot[6] = "hentai";
listemot[7] = "creampie";
listemot[8] = "pipe";
listemot[9] = "squirt";
listemot[10] = "hitler";
listemot[11] = "aushwitz";

//fonction qui retourne un nombre aléatoire
function Aleatoire(mini,maxi){
    let x = -1;
    while(x < mini){
        x = Math.round(Math.random() * maxi);
    }
    return x;
}
function Initialise(){
    motcache = listemot[Aleatoire(0, listemot.length)];
    table = new Array(motcache.length);
    affiche = new Array(motcache.length);
    played = 0;
    nbplayed = 0;
    for(var x = 0; x < motcache.length; x++){
        table[x] = motcache.charAt(x);
        affiche[x] = "- ";
    }
    out="";
    for(var x =0; x < motcache.length; x++) {
        out = out + affiche[x];
    }
    for(var x=0; x <=nbplayed;x++){
        playedchar[x] = "";
    }
    document.pendu.motcache.value = out;
    document.pendu.caracteres.value = "";
    document.pendu.caracterejoue.value = "";
    document.pendu.caracteres.focus();
}
function Continue(){
    if(played ==5){
        alert("T'a perdu grosse merde");
        out = "";
        for(var x = 0; x < motcache.length; x++){
            out = out +table[x];
        }
        document.pendu.motcache.value = out;
    }
    else{
        if(table.join() == affiche.join()){
            alert("T'as gagner");
        }
    }
}
function OKToPlay(carac){
    if(played == 5){
        return 1;
    }
    else {
        if(table.join() == affiche.join()){
            return 2;
        }
        else{
            if(carac==""){
                return 3;
            }
            else{
                let exist = false;
                for(var x=0; x < nbplayed; x++){
                    if(playedchar[x] == carac) {
                        exist = true;
                    }
                }
                if(exist){
                    return 4;
                }
            }
        }
    }
    return 0;
}

function TestCar(){
    let good = false;
    propose = document.pendu.caracteres.value;
    propose = propose.toLowerCase();
    let test = OKToPlay(propose);
    if(test == 0) {
        playedchar[nbplayed] = propose;
        for(var x = 0; x < motcache.length; x++){
            if(propose == table[x]){
                affiche[x] = propose;
                good = true;
            }
        }
        if(good){
            out = "";
            for(var x = 0; x < motcache.length; x++){
                out = out + affiche[x];
            }
            document.pendu.motcache.value = out;
        }
        else {
            document.getElementById("partie").innerHTML = '<img src="assets/img/'+pieces[played]+'" />';
            played++;
        }
        out="";
        for(var x = 0; x <= nbplayed; x++){
            out = out + playedchar[x]; 
        }
        nbplayed++;
        document.pendu.caracterejoue.value = out;
        document.pendu.caracteres.value = "";

        Continue();
    }
    else{
        if(test == 1) {
            alert("ta perdu grosse merde")
            document.pendu.caracteres.value="";
        }
        if(test == 2) {
            alert("ta gagner enculer")
            document.pendu.caracteres.value="";
        }
        if(test == 4) {
            alert("saisie un caractère")
            document.pendu.caracteres.value="";
        }
        if(test == 5) {
            alert("tu l'a deja écrit grosse merde")
            document.pendu.caracteres.value="";
        }
    }
    document.pendu.caracteres.focus();
}
Initialise();
