function k8s1() {
var i = document.getElementById("in11").value
var j = document.getElementById("in12").value
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://192.168.56.101/cgi-bin/k8s.py?x=" + "kubelct run "+ i + " --image="+ j, true);

xhr.send();

xhr.onload = function() {
  var output = xhr.responseText;
  document.getElementById("d1").innerHTML = output;
}
}
function k8s2() {
var i = document.getElementById("in21").value
var j = document.getElementById("in22").value
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://192.168.56.101/cgi-bin/k8s.py?x=" + "kubectl create deployment "+ i + " --image="+ j , true);

xhr.send();

xhr.onload = function() {
  var output = xhr.responseText;
  document.getElementById("d1").innerHTML = output;
}
}
function k8s3() {
var i = document.getElementById("in31").value
var j = document.getElementById("in32").value
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://192.168.56.101/cgi-bin/k8s.py?x=" + "kubectl expose deployment "+ i + " --port="+ j + " --type=NodePort", true);

xhr.send();

xhr.onload = function() {
  var output = xhr.responseText;
  document.getElementById("d1").innerHTML = output;
}
}
function k8s4() {
var i = document.getElementById("in41").value
var j = document.getElementById("in42").value
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://192.168.56.101/cgi-bin/k8s.py?x=" + "kubectl scale deployment "+ i + " --replicas="+ j, true);

xhr.send();

xhr.onload = function() {
  var output = xhr.responseText;
  document.getElementById("d1").innerHTML = output;
}
}
function k8s5() {
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://192.168.56.101/cgi-bin/k8s.py?x=" + "kubectl delete --all all", true);

xhr.send();

xhr.onload = function() {
  var output = xhr.responseText;
  document.getElementById("d1").innerHTML = output;
}
}
function k8s6() {
var i = document.getElementById("in61").value
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://192.168.56.101/cgi-bin/k8s.py?x=" + "kubectl delete pod "+ i, true);

xhr.send();

xhr.onload = function() {
  var output = xhr.responseText;
  document.getElementById("d1").innerHTML = output;
}
}


// ********************************************************************************************************************



function lw1() {
    document.getElementById("inputDiv1").style.display = "block";
}

function close1() {
    document.getElementById("inputDiv1").style.display = "none";
}
function lw2() {
    document.getElementById("inputDiv2").style.display = "block";
}

function close2() {
    document.getElementById("inputDiv2").style.display = "none";
}
function lw3() {
    document.getElementById("inputDiv3").style.display = "block";
}

function close3() {
    document.getElementById("inputDiv3").style.display = "none";
}
function lw4() {
    document.getElementById("inputDiv4").style.display = "block";
}

function close4() {
    document.getElementById("inputDiv4").style.display = "none";
}
// function lw5() {
//     document.getElementById("inputDiv5").style.display = "block";
// }
//
// function close5() {
//     document.getElementById("inputDiv5").style.display = "none";
// }
function lw6() {
    document.getElementById("inputDiv6").style.display = "block";
}

function close6() {
    document.getElementById("inputDiv6").style.display = "none";
}
