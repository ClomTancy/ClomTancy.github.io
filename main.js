// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

document.addEventListener("DOMContentLoaded", function() {
  var num_launchers = 20;
  var num_flares = 15;
  var flare_colours = ['red', 'aqua', 'violet', 'yellow', 'lightgreen', 'white', 'blue'];
  var cssIdx = document.styleSheets.length - 1;

  function myRandom(from, to)
  {
    return from + Math.floor(Math.random() * (to-from));
  }

  var keyframes_template = "from { left: LEFTFROM%; top: 380px; width: 6px; height: 12px; }\n"
      + "33% { left: LEFTTOP%; top: TOPTOPpx; width: 0; height: 0; }\n"
      + " to { left: LEFTEND%; top: BOTBOTpx; width: 0; height: 0; }";

  for(var i=0; i < num_launchers; i++) {
    leftfrom = myRandom(15, 85);
    lefttop = myRandom(30, 70);
    toptop = myRandom(20, 500);
    leftend = lefttop + (lefttop-leftfrom)/2;
    botbot = toptop + 100;

    csscode = keyframes_template;
    csscode = csscode.replace(/LEFTFROM/, leftfrom);
    csscode = csscode.replace(/LEFTTOP/, lefttop);
    csscode = csscode.replace(/TOPTOP/, toptop);
    csscode = csscode.replace(/LEFTEND/, leftend);
    csscode = csscode.replace(/BOTBOT/, botbot);

    try { // WebKit browsers
      csscode2 = "@-webkit-keyframes flight_" + i + " {\n" + csscode + "\n}";
      document.styleSheets[cssIdx].insertRule(csscode2, 0);
    } catch(e) { }

    try { // Mozilla browsers
      csscode2 = "@-moz-keyframes flight_" + i + " {\n" + csscode + "\n}";
      document.styleSheets[cssIdx].insertRule(csscode2, 0);
    } catch(e) { }
  }

  for(var i=0; i < num_launchers; i++) {
    var rand = myRandom(0, flare_colours.length - 1);
    var rand_colour = flare_colours[rand];
    var launch_delay = myRandom(0,100) / 10;

    csscode = ".launcher:nth-child(" + num_launchers + "n+" + i + ") {\n"
      + "  -webkit-animation-name: flight_" + i + ";\n"
      + "  -webkit-animation-delay: " + launch_delay + "s;\n"
      + "  -moz-animation-name: flight_" + i + ";\n"
      + "  -moz-animation-delay: " + launch_delay + "s;\n"
      + "}";
    document.styleSheets[cssIdx].insertRule(csscode, 0);

    csscode = ".launcher:nth-child(" + num_launchers + "n+" + i + ") div {"
      + "  border-color: " + rand_colour + ";\n"
      + "  -webkit-animation-delay: " + launch_delay + "s;\n"
      + "  -moz-animation-delay: " + launch_delay + "s;\n"
      + "}";
    document.styleSheets[cssIdx].insertRule(csscode, 0);
  }

  for(var i=0; i < num_flares; i++) {
    csscode = ".launcher div:nth-child(" + num_flares + "n+" + i + ") {\n"
	+ "  -webkit-transform: rotate(" + (i * 360/num_flares) + "deg);\n"
	+ "  -moz-transform: rotate(" + (i * 360/num_flares) + "deg);\n"
	+ "}";
    document.styleSheets[cssIdx].insertRule(csscode, 0);
  }

  for(var i=0; i < num_launchers; i++) {
    var newdiv = document.createElement("div");
    newdiv.className = "launcher";
    for(var j=0; j < num_flares; j++) {
      newdiv.appendChild(document.createElement("div"));
    }
    document.getElementById("stage").appendChild(newdiv);
  }
}, false);


const back = document.querySelector(".back");

function changebackground() {
  let x = document.getElementById("bkgs").value;
  let dList = document.styleSheets[0].cssRules[0].style;
  dList.setProperty("--borderbkg1", x);
  console.log(dList);
}
function changebackground1() {
  let x = document.getElementById("bkgs1").value;
  let dList = document.styleSheets[0].cssRules[0].style;
  dList.setProperty("--borderbkg3", x);
  console.log(dList);
}
function changebackground3() {
  let x = document.getElementById("bkgs2").value;
  let dList = document.styleSheets[0].cssRules[0].style;
  dList.setProperty("--Mainbkg", x);
  console.log(dList);
}
function bordersplit1() {
  let y = document.getElementById("borderInside").value;
  let dList = document.styleSheets[0].cssRules[0];
  y = y + "%";
  dList.style.setProperty("--split2", y);
  console.log(y);
}
function bordersplit() {
  let y = document.getElementById("borderAdjust").value;
  let dList = document.styleSheets[0].cssRules[0];
  y = y + "%";
  dList.style.setProperty("--split1", y);
  console.log(y);
}
function borderWidth1() {
  console.log("start");
  let y = document.getElementById("borderWidth1").value;
  console.log(y);
  let dList = document.styleSheets[0].cssRules[0];
  y = y + "rem";
  dList.style.setProperty("--widthone", y);
}
function borderWidth2() {
  console.log("start");
  let z = document.getElementById("borderWidth2").value;
  console.log(z);
  let dList = document.styleSheets[0].cssRules[0];
  z = z + "px";
  dList.style.setProperty("--ibWidth", z);
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function Randompics() {
  let bkg = document.querySelectorAll(".photon-shader");

  let randPic = [];
  for (let h in bkg) {

   let i = randomIntFromInterval(1, 20)
   randPic.push("url('./imgs/" + i +".png')");
    bkg[h].style = "background-image:" + randPic[i] + "; background-repeat: no-repeat; background-size: 100% ;   background-position: center;";

    
  }
}





document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");
  Randompics();
});