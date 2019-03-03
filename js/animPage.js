/********** CHARGE DATA JSON **********/

var xmlhttp = new XMLHttpRequest();
var url = "csvjson.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {

  /********** THREE JS **********/
  var scene = new THREE.Scene();

  var renderer = new THREE.WebGLRenderer( { alpha: true } );
  document.querySelector('#container').appendChild(renderer.domElement).classList.add("canvas");;
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0xBCCAD1, 0 );

  var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000);

  var x = 120;
  var y = 70;
  var magnitude = 9;
  var magnitudeTarget = 0;
 

  var planeGeometry = new THREE.PlaneGeometry(x, y, 100, 100);
  var planeMaterial = new THREE.MeshBasicMaterial({color: 0xE6E6E6, wireframe: true});
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);

  plane.rotation.x = -0.4 * Math.PI;

  plane.position.set(0, -10, 0);

  scene.add(plane);

  camera.position.set(0, 20, 100);
  camera.lookAt(scene.position);

  drawFrame();

  function drawFrame(ts){
    var center = new THREE.Vector2(0,0);
    window.requestAnimationFrame(drawFrame);
    var vLength = plane.geometry.vertices.length;
    magnitude += (magnitudeTarget - magnitude) * 0.04;
    for (var i = 0; i < vLength; i++) {
      var v = plane.geometry.vertices[i];
      var dist = new THREE.Vector2(v.x, v.y).sub(center);
      var size = 2.5;
      v.z = Math.sin(dist.length()/-size + (ts/900)) * magnitude;
    }
    plane.geometry.verticesNeedUpdate = true;
    renderer.render(scene, camera);
  };

/********** GESTION DES POINTS SUR LA MAP **********/
var australia = document.querySelector(".australia");
var mexico = document.querySelector(".mexico");
var neth = document.querySelector(".neth");
var tunisia = document.querySelector(".tunisia");
var asia = document.querySelector(".asia");
var dataName = document.querySelector(".dataName");
var dataYear = document.querySelector(".dataYear");


/*var point = document.getElementsByClassName("point");
  for(var i = 0; i < point.length; i++)
  {
    point[i].onclick = function(){
      var el = point[0];
      while(el){
        if(el.tagName === "point"){
          el.classList.remove("active");
        }
        el = el.nextSibling;
      }
      this.classList.add("active");
    };
  }*/


function goutte(){
  document.querySelector(".imgGoutte").classList.add("imgGoutte2");
  setTimeout(function(){ 
    document.querySelector(".imgGoutte").classList.remove("imgGoutte2");
  }, 1000);
};

    //australia
    australia.onclick = function() {
      dataName.innerHTML = arr[0].Country;
      goutte();
      australia.classList.add("active");
      magnitudeTarget = 5.5;
     asia.classList.remove("active");
      mexico.classList.remove("active");
      neth.classList.remove("active");
      tunisia.classList.remove("active");
      /*************** COMPTEUR ***************/
      var n = arr[0].Year.toFixed(2);
      var cpt = 0;
      var duree = 5;
      var delta = Math.ceil((duree * 100) / n);
      var node =  dataYear;
      
      function countdown() {
        node.innerHTML = ++cpt + '%';
        if( cpt < n ) {setTimeout(countdown, delta);}}
      setTimeout(countdown, delta);
    };
    
    //mexico
    mexico.onclick = function() {
      dataName.innerHTML = arr[1].Country;
      goutte();
      magnitudeTarget = 4;
      mexico.classList.add("active");
      australia.classList.remove("active");
      asia.classList.remove("active");
      neth.classList.remove("active");
      tunisia.classList.remove("active");
      /*************** COMPTEUR ***************/
      n = arr[1].Year.toFixed(2);
      cpt = 0;
      duree = 5;
      delta = Math.ceil((duree * 100) / n);
      node =  dataYear;
            
      function countdown() {
        node.innerHTML = ++cpt + '%';
        if( cpt < n ) {setTimeout(countdown, delta);}}
      setTimeout(countdown, delta);
    };

    //neth
    neth.onclick = function() {
      dataName.innerHTML = arr[2].Country;
      goutte();
      magnitudeTarget = 0.2;
      neth.classList.add("active");
      australia.classList.remove("active");
      mexico.classList.remove("active");
      asia.classList.remove("active");
      tunisia.classList.remove("active");
      /*************** COMPTEUR ***************/
      n = arr[2].Year.toFixed(2);
      cpt = 0;
      duree = 5;
      delta = Math.ceil((duree * 100) / n);
      node =  dataYear;
                  
      function countdown() {
      node.innerHTML = ++cpt + '%';
        if( cpt < n ) {setTimeout(countdown, delta);}}
      setTimeout(countdown, delta);
    };

    //tunisia
    tunisia.onclick = function() {
      dataName.innerHTML = arr[3].Country;
      goutte();
      magnitudeTarget = 1.5;
      tunisia.classList.add("active");
      australia.classList.remove("active");
      mexico.classList.remove("active");
      neth.classList.remove("active");
      asia.classList.remove("active");
      /*************** COMPTEUR ***************/
      n = arr[3].Year.toFixed(2);
      cpt = 0;
      duree = 5;
      delta = Math.ceil((duree * 100) / n);
      node =  dataYear;
                  
      function countdown() {
      node.innerHTML = ++cpt + '%';
        if( cpt < n ) {setTimeout(countdown, delta);}}
      setTimeout(countdown, delta);
    };

    //asia
    asia.onclick = function() {
      dataName.innerHTML = arr[4].Country;
      goutte();
      magnitudeTarget = 3;
      asia.classList.add("active");
      australia.classList.remove("active");
      mexico.classList.remove("active");
      neth.classList.remove("active");
      tunisia.classList.remove("active");
      /*************** COMPTEUR ***************/
      n = arr[4].Year.toFixed(2);
      cpt = 0;
      duree = 5;
      delta = Math.ceil((duree * 100) / n);
      node =  dataYear;
                  
      function countdown() {
      node.innerHTML = ++cpt + '%';
        if( cpt < n ) {setTimeout(countdown, delta);}}
      setTimeout(countdown, delta);
    };






/*************** ACCUEIL ***************/

// EFFECT WATER
 $(document).ready(function(){
  $('#home').ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.01,
});
});


// SCROLL PAGE ACCUEIL
var scroll = document.querySelector(".scroll");
var home = document.querySelector("#home");
var container = document.querySelector("#container");
var boutonOne = document.querySelector(".bouton1");
var boutonTwo = document.querySelector(".bouton2");
var center = document.querySelector(".center");
var dataName = document.querySelector(".dataName");
var dataYear = document.querySelector(".dataYear");
var annee = document.querySelector(".annee");
var pays = document.querySelector("#pays");
var audio = document.querySelector("audio");

// LA PAGE 1 DISPARAIT
scroll.onclick = function(){
  disparait();
  boutonTwo.classList.add("active");
  boutonOne.classList.add("color");
}

home.addEventListener("wheel", function(){
  disparait();
  boutonTwo.classList.add("active");
  boutonOne.classList.add("color");
});

boutonTwo.onclick = function(){
  disparait();
  boutonTwo.classList.add("active");
  boutonOne.classList.add("color");
}

function disparait() {
  center.classList.add("centerOver");
  setTimeout(function(){ 
      home.style.display = "none";
      center.classList.remove("centerOver");
      apparition();
  }, 1450);
};

// LA PAGE 1 APPARAIT
boutonOne.onclick = function(){
  document.location.reload(true);
}

// LA PAGE 2 APPARAIT
function apparition(){
  container.classList.add("container2");
  dataName.classList.add("boumA");
  dataYear.classList.add("boumA");
  annee.classList.add("boumA");
  soustitre.classList.add("boumA");
  pays.classList.add("boumA");
  setTimeout(function(){ 
      container.style.opacity = "1";
      dataName.style.opacity = "1";
      dataYear.style.opacity = "1";
      annee.style.opacity = "1";
      pays.style.opacity = "1";
  }, 1500);
  setTimeout(function(){ 
    goutte();
}, 1700);
    setTimeout(function(){ 
      magnitudeTarget = 7;
  }, 2550);
};

container.addEventListener("wheel", function(){
  document.location.reload(true);
});
}