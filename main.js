const r=document.getElementById("1");
const p=document.getElementById("2");
const s=document.getElementById("3");
var mscore=0;
var pcs=0;


function rock(){
    const ran=(Math.floor((Math.random()*3)+1));
    console.log(ran);
    if(ran==1){
        document.getElementById("oim").src="assets/rock.png";
        mscore+=1;
        pcs+=1;
        document.getElementById("ops").textContent=pcs;
        document.getElementById("mps").textContent=mscore;
    }
    else if(ran==2){
        document.getElementById("oim").src="assets/paper.png";
        pcs+=1;
        document.getElementById("ops").textContent=pcs;
        document.getElementById("mps").textContent=mscore;
    }
    else{
        document.getElementById("oim").src="assets/scissors.png";
        mscore+=1;
        document.getElementById("ops").textContent=pcs;
        document.getElementById("mps").textContent=mscore;
    }
    document.getElementById("mim").src="assets/rock.png";

    if(mscore==10){
        console.log("You win!");
        document.getElementById("winner").textContent="You Win !!"
        document.getElementById("over").style.display="block";
    }
    else if(pcs==10){
        console.log("PC wins!");
        document.getElementById("winner").textContent="PC Wins !!"
        document.getElementById("over").style.display="block";
    }
    else{}
}


function pap(){
    const ran=(Math.floor((Math.random()*3)+1));
    console.log(ran);
    if(ran==1){
        document.getElementById("oim").src="assets/rock.png";
        mscore+=1;
        document.getElementById("ops").textContent=pcs;
        document.getElementById("mps").textContent=mscore;
    }
    else if(ran==2){
        document.getElementById("oim").src="assets/paper.png";
        pcs+=1;
        mscore+=1;
        document.getElementById("ops").textContent=pcs;
        document.getElementById("mps").textContent=mscore;
    }
    else{
        document.getElementById("oim").src="assets/scissors.png";
        mscore+=1;
        pcs+=1;
        document.getElementById("ops").textContent=pcs;
        document.getElementById("mps").textContent=mscore;
    }
    document.getElementById("mim").src="assets/paper.png";
    if(mscore==10){
        console.log("You win!");
        document.getElementById("winner").textContent="You Win !!"
        document.getElementById("over").style.display="block";
    }
    else if(pcs==10){
        console.log("PC wins!");
        document.getElementById("winner").textContent="PC Wins !!"
        document.getElementById("over").style.display="block";
    }
    else{}
}


function scc(){
    const ran=(Math.floor((Math.random()*3)+1));
    console.log(ran);
    if(ran==1){
        document.getElementById("oim").src="assets/rock.png";
        pcs+=1;
        document.getElementById("ops").textContent=pcs;
        document.getElementById("mps").textContent=mscore;
    }
    else if(ran==2){
        document.getElementById("oim").src="assets/paper.png";
        mscore+=1;
        document.getElementById("ops").textContent=pcs;
        document.getElementById("mps").textContent=mscore;
    }
    else{
        document.getElementById("oim").src="assets/scissors.png";
        mscore+=1;
        pcs+=1;
        document.getElementById("ops").textContent=pcs;
        document.getElementById("mps").textContent=mscore;
    }
    document.getElementById("mim").src="assets/scissors.png";
    if(mscore==10){
        console.log("You win!");
        document.getElementById("winner").textContent="You Win !!"
        document.getElementById("over").style.display="block";
    }
    else if(pcs==10){
        console.log("PC wins!");
        document.getElementById("winner").textContent="PC Wins !!"
        document.getElementById("over").style.display="block";
    }
    else{}
}

function fn(){
    document.getElementById("over").style.display="none";
    mscore=0;
    pcs=0;
    document.getElementById("ops").textContent=pcs;
    document.getElementById("mps").textContent=mscore;
    document.getElementById("oim").src="assets/qn.png";
    document.getElementById("mim").src="assets/qn.png";

}

function openss(){
    document.getElementById("ovee").style.display="none";
    document.getElementById("main").style.display="block";
}



