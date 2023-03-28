var bt = "c,,(,),del,/,*,+,-,0,1,2,3,4,5,6,7,8,9,=".split(",");

var s = "";

for (var a of bt){
    var hide = (a == '')?"hide": "";
    var but_class = "button.p8.m4.rad10" +hide+"";
    var click = (a !== 'c')?`insert("${a}")`: `delete_all()`;
    click = (a !== '=')?click: `calculer("${s}")`;
    click = (a !== 'del')?click: `del()`;
    switch (a){
        case 'c': but_class += "red"; break;
        case '=': but_class += "green"; break;

    }
    var bt = `<div class="${but_class}" onclick='${click}'>${a}</div>`
    document.getElementById("button-layout").innerHTML += bt;
}

function insert(txt) {
    document.getElementById('text').innerText += txt; 
    s += txt;
}

function delete_all() {
    document.getElementById('text').innerText += "";
    s = "";
}

function calculer(txt) {
    document.getElementById('text').innerText = eval(s); 
    s = new String(eval(s));
}

function del() {
    document.getElementById('text').innerText = s.substring(0, s.length-1);
    s = s.substring (0, s.length-1);
}