const PI = 3.14

var divdati = document.getElementById("div.dati");
var divrisultato = document.getElementById("div.risultato");

function riavvia() {
  document.getElementById("H").value = "";
  document.getElementById("R").value = "";
  document.getElementById("C").value = "";
  document.getElementById("AB").value = "";
  document.getElementById("AL").value = "";
  document.getElementById("AT").value = "";
  document.getElementById("V").value = "";
  
  divdati.style.display = "block";
  divrisultato.style.display = "none";

  var tabella = document.getElementById("tabella-cilindro");
  var righe = tabella.rows;
  for (var i = 0; i < righe.length; i++) {
    var cella = righe[i].cells[1];
    cella.innerHTML = "";
  }
}

function calcola() {
  
  var R = parseFloat(document.getElementById("R").value)
  var C = parseFloat(document.getElementById("C").value)
  var AB = parseFloat(document.getElementById("AB").value)
  var AL = parseFloat(document.getElementById("AL").value)
  var AT = parseFloat(document.getElementById("AT").value)
  var H = parseFloat(document.getElementById("H").value)
  var V = parseFloat(document.getElementById("V").value)
  
  // R-H
   if (R > 0 && H > 0) {
     const C = (2*PI)*R
     const AB = PI*(R*R)
     const AL = C*H
     const AT = AL+(AB*2)
     const V = AB*H
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block";
   }
  
   // R-AL
   else if (R > 0 && AL > 0) {
    const C = (2*PI)*R
    const AB = PI*(R*R)
    const AT = AL+(AB*2)
    const H = AL/C
    const V = AB*H
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block";
   }

  // R-AT
   else if (R > 0 && AT > 0) {  
    const C = (2*PI)*R
    const AB = PI*(R*R)
    const AL = AT-(AB*2)
    const H = AL/C
    const V = AB*H
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block";
   }

  // C-AL
   else if (C > 0 && AL > 0) {
    const R = C/(2*PI)
    const AB = PI*(R*R)
    const AT = AL+(AB*2)
    const H = AL/C
    const V = AB*H
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block";
   }

  // C-AT
   else if (C > 0 && AT > 0) {
    const R = C/(2*PI)
    const AB = PI*(R*R)
    const AL = AT-(AB*2)
    const H = AL/C
    const V = AB*H
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block";
   }

  // C-H
   else if (C > 0 && H > 0) {
    const R = C/(2*PI)
    const AB = PI*(R*R)
    const AL = C*H
    const AT = AL+(AB*2)
    const V = AB*H
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block";
   }

  // AB-AL
   else if (AB > 0 && AL > 0) {
    const R = Math.sqrt([AB/PI])
    const C = (2*PI)*R
    const AT = AL+(AB*2)
    const H = AL/C
    const V = AB*H
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block";
   }

  // AB-AT
   else if (AB > 0 && AT > 0) {
    const R = Math.sqrt([AB/PI])
    const C = (2*PI)*R
    const AL = AT-(AB*2)
    const H = AL/C
    const V = AB*H
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block";
   }

  // AB-H
   else if (AB > 0 && H > 0) {
    const R = Math.sqrt([AB/PI])
    const C = (2*PI)*R
    const AL = C*H
    const AT = AL+(AB*2)
    const V = AB*H
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block";
   }

  // AL-AT
   else if (AL > 0 && AT > 0) {
    const AB = (AT-AL)/2
    const R = Math.sqrt([AB/PI])
    const C = (2*PI)*R
    const H = AL/C
    const V = AB*H
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block";
   }

  // AL-H
   else if (AL > 0 && H > 0) {
    const R = (AL/H)/(2*PI)
    const C = (2*PI)*R
    const AB = PI*(R*R)
    const AT = AL+(AB*2)
    const V = AB*H
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block"; 
   }
  // V-AB
   else if (V > 0 && AB > 0) {
    const R = Math.sqrt([AB/PI])
    const H = V/AB
    const C = (2*PI)*R
    const AL = C*H
    const AT = AL+(AB*2)
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block"; 
   } 

  // V-H
   else if (V > 0 && H > 0) {
    const AB = V/H
    const R = Math.sqrt([AB/PI])
    const C = (2*PI)*R
    const AL = C*H
    const AT = AL+(AB*2)
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block"; 
   } 

  // V-R
   else if (V > 0 && R > 0) {
    const AB = PI*(R*R)
    const H = V/AB
    const C = (2*PI)*R
    const AL = C*H
    const AT = AL+(AB*2)
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block"; 
   } 

  // V-C
   else if (V > 0 && C > 0) {
    const R = C/(2*PI)
    const AB = PI*(R*R)
    const H = V/AB
    const C = (2*PI)*R
    const AL = C*H
    const AT = AL+(AB*2)
      var tabella = document.getElementById("tabella-cilindro");
      tabella.rows[0].cells[1].innerHTML = Math.floor(R * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((R/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[1].cells[1].innerHTML = Math.floor(H * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((H/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[2].cells[1].innerHTML = Math.floor(C * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((C/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[3].cells[1].innerHTML = Math.floor(AB * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AB/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[4].cells[1].innerHTML = Math.floor(AL * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AL/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[5].cells[1].innerHTML = Math.floor(AT * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((AT/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      tabella.rows[6].cells[1].innerHTML = Math.floor(V * Math.pow(10, 3)) / Math.pow(10, 3) + " = " + Math.floor((V/PI) * Math.pow(10, 3)) / Math.pow(10, 3) + "π";
      divdati.style.display = "none";
      divrisultato.style.display = "block"; 
   } 
 
   else {
    alert("Errore! Assicurati di aver completato solo due campi validi, il resto viene calcolato automaticamente. Per ulteriori informazioni consulta la sezione guida.");
    riavvia()
   }
}