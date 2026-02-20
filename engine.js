let A=0,B=0,fA=0,fB=0;
let t=600,s=12,tm,sm;

function update(){
if(document.getElementById("scoreA"))document.getElementById("scoreA").innerText=A;
if(document.getElementById("scoreB"))document.getElementById("scoreB").innerText=B;
if(document.getElementById("foulA"))document.getElementById("foulA").innerText=fA;
if(document.getElementById("foulB"))document.getElementById("foulB").innerText=fB;
if(document.getElementById("clock"))document.getElementById("clock").innerText=Math.floor(t/60)+":"+String(t%60).padStart(2,"0");
if(document.getElementById("shot"))document.getElementById("shot").innerText=s;
}

function add(team,p){
if(team=="A")A+=p; else B+=p;
if(A>=21||B>=21){alert("🏆 GAME END 21 POINTS"); stop();}
s=12; update();
}

function foul(team){
if(team=="A")fA++; else fB++;
update();
}

function start(){
tm=setInterval(()=>{if(t>0)t--; update();},1000);
sm=setInterval(()=>{if(s>0)s--; update();},1000);
}

function stop(){
clearInterval(tm);
clearInterval(sm);
}

function reset(){
A=0;B=0;fA=0;fB=0;t=600;s=12;
update();
}

update();