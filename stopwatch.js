let starttime=0;
let elapsedtime=0;
let timer=null;
let run=false;
function start(){
    if(!run){
    starttime=Date.now()-elapsedtime;
    timer=setInterval(update,10)
    run=true;
    }

}

function stop(){
    if(run){
    clearInterval(timer);
    elapsedtime=Date.now() - starttime
    run=false;

    }
}
function reset(){
    watch.textContent=`00:00:00:00`

}
function update(){
    let currenttime= Date.now()
    elapsedtime=currenttime-starttime;
    let hours=Math.floor(elapsedtime/(1000*60*60));
    let minutes=Math.floor(elapsedtime/(1000*60)%60);
    let seconds=Math.floor(elapsedtime/1000%60);
    let milliseconds=Math.floor((elapsedtime %1000)/60);
    let format=`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}:${String(milliseconds).padStart(2,"0")}`;
     let watch=document.getElementById("watch").textContent=format
     

}