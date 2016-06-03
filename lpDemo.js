function main() {

  var lpEerste = document.getElementById("lp1");
  var lpTweede = document.getElementById("lp2");
  var lpDerde = document.getElementById("lp3");
  var lpVierde = document.getElementById("lp4");
  var lpVijfde = document.getElementById("lp5");
  var lpZesde = document.getElementById("lp6");
  var lpZevende = document.getElementById("lp7");
  var lpAchtste = document.getElementById("lp8");
  var lpNegende = document.getElementById("lp9");
  var uitvergroot1 = document.getElementById("aangeduid1");
  var uitvergroot2 = document.getElementById("aangeduid2");
  var uitvergroot3 = document.getElementById("aangeduid3");
  var uitvergroot4 = document.getElementById("aangeduid4");
  var uitvergroot5 = document.getElementById("aangeduid5");
  var uitvergroot6 = document.getElementById("aangeduid6");
  var uitvergroot7 = document.getElementById("aangeduid7");
  var uitvergroot8 = document.getElementById("aangeduid8");
  var uitvergroot9 = document.getElementById("aangeduid9");
  var basis = document.getElementById("uitleg");

  lpEerste.onmouseover=function() {
    basis.classList.add("onzichtbaar");
    uitvergroot1.classList.remove("onzichtbaar");
  }
  lpEerste.onmouseout=function() {
    uitvergroot1.classList.add("onzichtbaar");
    basis.classList.remove("onzichtbaar");
  }
  lpTweede.onmouseover=function() {
    basis.classList.add("onzichtbaar");
    uitvergroot2.classList.remove("onzichtbaar");
  }
  lpTweede.onmouseout=function() {
    uitvergroot2.classList.add("onzichtbaar");
    basis.classList.remove("onzichtbaar");
  }
  lpDerde.onmouseover=function() {
    basis.classList.add("onzichtbaar");
    uitvergroot3.classList.remove("onzichtbaar");
  }
  lpDerde.onmouseout=function() {
    uitvergroot3.classList.add("onzichtbaar");
    basis.classList.remove("onzichtbaar");
  }
  lpVierde.onmouseover=function() {
    basis.classList.add("onzichtbaar");
    uitvergroot4.classList.remove("onzichtbaar");
  }
  lpVierde.onmouseout=function() {
    uitvergroot4.classList.add("onzichtbaar");
    basis.classList.remove("onzichtbaar");

  }
  lpVijfde.onmouseover=function() {
    basis.classList.add("onzichtbaar");
    uitvergroot5.classList.remove("onzichtbaar");
  }
  lpVijfde.onmouseout=function() {
    uitvergroot5.classList.add("onzichtbaar");
    basis.classList.remove("onzichtbaar");
  }
  lpZesde.onmouseover=function() {
    basis.classList.add("onzichtbaar");
    uitvergroot6.classList.remove("onzichtbaar");
  }
  lpZesde.onmouseout=function() {
    uitvergroot6.classList.add("onzichtbaar");
    basis.classList.remove("onzichtbaar");
  }
  lpZevende.onmouseover=function() {
    basis.classList.add("onzichtbaar");
    uitvergroot7.classList.remove("onzichtbaar");
  }
  lpZevende.onmouseout=function() {
    uitvergroot7.classList.add("onzichtbaar");
    basis.classList.remove("onzichtbaar");
  }
  lpAchtste.onmouseover=function() {
    basis.classList.add("onzichtbaar");
    uitvergroot8.classList.remove("onzichtbaar");
  }
  lpAchtste.onmouseout=function() {
    uitvergroot8.classList.add("onzichtbaar");
    basis.classList.remove("onzichtbaar");
  }
  lpNegende.onmouseover=function() {
    basis.classList.add("onzichtbaar");
    uitvergroot9.classList.remove("onzichtbaar");
  }
  lpNegende.onmouseout=function() {
    uitvergroot9.classList.add("onzichtbaar");
    basis.classList.remove("onzichtbaar");
  }


}

window.onload=function(){main()}
