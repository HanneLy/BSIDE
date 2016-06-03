

function main() {

  var buttonMail = document.getElementById("mail");
  var buttonOpeningsuren = document.getElementById("openingsuren");
  var buttonWegbeschrijving = document.getElementById("wegbeschrijving");
  var tekstvakMail = document.getElementById("mailDiv");
  var tekstvakOpeningsuren = document.getElementById("openingsurenDiv");
  var tekstvakWegbeschrijving = document.getElementById("wegbeschrijvingDiv");

  buttonMail.onclick=function() {
    tekstvakMail.style.visibility = "visible";
    tekstvakOpeningsuren.style.visibility = "hidden";
    tekstvakWegbeschrijving.style.visibility = "hidden";
    console.log("Hallo");
  }

  buttonOpeningsuren.onclick=function() {
    tekstvakMail.style.visibility = "hidden";
    tekstvakOpeningsuren.style.visibility = "visible";
    tekstvakWegbeschrijving.style.visibility = "hidden";
  }

  buttonWegbeschrijving.onclick=function() {
    tekstvakMail.style.visibility = "hidden";
    tekstvakOpeningsuren.style.visibility = "hidden";
    tekstvakWegbeschrijving.style.visibility = "visible";
  }
}

window.onload=function() {main()}
