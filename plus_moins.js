let randNum;
let score = 0;
let score2 = 0;
let joueur;
let numDiv = document.getElementById("numDiv");
let numDiv2 = document.getElementById("numDiv2");
let nivDiv = document.getElementById("nivDiv");
let modeDiv = document.getElementById("modeDiv");
let jouerDiv = document.getElementById("jouerDiv");
let scoreDiv = document.getElementById("scoreDiv");
let rangeDiv = document.getElementById("rangeDiv");
let score2Div = document.getElementById("score2Div");
let joDiv = document.getElementById("joDiv");
let jo2Div = document.getElementById("jo2Div");
let backs = document.getElementById("backs");

let niveau;
let countInterm = 0;
let countPro = 0;


scoreDiv.style.display = "none"
score2Div.style.display = "none"
rangeDiv.style.display = "none"
modeDiv.style.display = "none";
nivDiv.style.display = "none";
numDiv.style.display = "none";
numDiv2.style.display = "none";
joDiv.style.display = "none";
jo2Div.style.display = "none";
backs.style.display = "none";

function jouer() {
    if (modeDiv.style.display === "none") {
        modeDiv.style.display = "block";
        jouerDiv.style.display = "none";
    }
}

function un_joueur() {
    if (nivDiv.style.display === "none") {
        nivDiv.style.display = "block";
        scoreDiv.style.display = "block"
        rangeDiv.style.display = "block"
        modeDiv.style.display = "none";
    }

    document.getElementById("score_disp").innerHTML = score
}

function deux_joueur() {
    if (nivDiv.style.display === "none") {
        nivDiv.style.display = "block";
        
        
        modeDiv.style.display = "none";
    }

    document.getElementById("score_disp").innerHTML = score;
    document.getElementById("score_disp2").innerHTML = score;
    joueur = 2
}

function debutant() {
    randNum = Math.floor(Math.random() * 10); 
    niveau = 1;

    if (numDiv.style.display === "none") {
        numDiv.style.display = "block";
        backs.style.display = "block"
        
    }

    if (joueur == 2 && numDiv2.style.display === "none") {
        numDiv2.style.display = "block";
        joDiv.style.display = "block";
        jo2Div.style.display = "block";
        scoreDiv.style.display = "block"
        rangeDiv.style.display = "block"
        score2Div.style.display = "block"
        backs.style.display = "block"
    }

    document.getElementById("range").innerHTML = "Range: 1 a 10";
}


function interm() {
    randNum = Math.floor(Math.random() * 100); 
    niveau = 2;

    if (numDiv.style.display === "none") {
        numDiv.style.display = "block";
        backs.style.display = "block"
    }

    if (joueur == 2 && numDiv2.style.display === "none") {
        numDiv2.style.display = "block";
        joDiv.style.display = "block";
        jo2Div.style.display = "block";
        scoreDiv.style.display = "block"
        rangeDiv.style.display = "block"
        score2Div.style.display = "block"
        backs.style.display = "block"
    }

    document.getElementById("range").innerHTML = "Range: 1 a 100";
}


function pro() {
    randNum = Math.floor(Math.random() * 1000); 
    niveau = 3;

    if (numDiv.style.display === "none") {
        numDiv.style.display = "block";
        backs.style.display = "block"
    }

    if (joueur == 2 && numDiv2.style.display === "none") {
        numDiv2.style.display = "block";
        joDiv.style.display = "block";
        jo2Div.style.display = "block";
        scoreDiv.style.display = "block"
        rangeDiv.style.display = "block"
        score2Div.style.display = "block"
        backs.style.display = "block"
    }

    document.getElementById("range").innerHTML = "Range: 1 a 1000";
}


function check() {
    let num = document.getElementById("num").value;
    

    // alert("random number " + randNum);
    if (niveau == 2) {
        
        countInterm ++;
        if (countInterm > 10) {
            alert("Nombre de coups exceder, vous avez perdus");
            interm ();
            countInterm = 0;
        }
    }

    if (niveau == 3) {
        
        countPro ++;
        if (countPro > 20) {
            alert("Nombre de coups exceder, vous avez perdus");
            pro ();
            countPro = 0;
        }
    }
    
    
    if (num == randNum) {
        score ++;
        document.getElementById("score_disp").innerHTML = score;
        
        alert("Bingo");
        countPro = 0;
        countInterm = 0;
        if (joueur == 3) {
            alert("Joueur 1 a gagner");
        }

        if (niveau == 1) {
            debutant ();
        }

        if (niveau == 2) {
            interm ();
            
        }

        if (niveau == 3) {
            pro ();
        }
    }
    else if (num < randNum) {
        alert("plus");
    }
    else if (num > randNum) {
        alert("moins");
    }

}

function back() {
    // if (nivDiv.style.display === "block") {
    //     nivDiv.style.display === "none";
    //     scoreDiv.style.display === "none";
    //     numDiv.style.display === "none";
    // }
    location.reload();

}


function check2() {
    let num2 = document.getElementById("num2").value;
    

    // alert("random number " + randNum);
    
    if (num2 == randNum) {
        score2 ++;
        document.getElementById("score_disp2").innerHTML = score2
        alert("Bingo");
        if (joueur == 2) {
            alert("Joueur 2 a gagner");
        }

        if (niveau == 1) {
            debutant ();
        }

        if (niveau == 2) {
            interm ();
        }

        if (niveau == 3) {
            pro ();
        }
    }
    else if (num2 < randNum) {
        alert("plus");
    }
    else if (num2 > randNum) {
        alert("moins");
    }

}