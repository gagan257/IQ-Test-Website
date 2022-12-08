var count=0;
var min=0;
var timer=false;

    window.addEventListener('load',start) 
    function start(){
        timer=true;
        stopwatch();
        console.log("loaded")
        
    }

function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count==60){
            min=min+1;
            count=0;
        }

        document.getElementById('timer-sec').innerHTML= count;    
        document.getElementById('timer-min').innerHTML= min;    
        setTimeout("stopwatch()",1000);
        // document.getElementById('sub1').addEventListener('click',)
    }
}
document.getElementById('sub1').addEventListener('click',finish);


function finish(){
    timer=false;
    var x=document.getElementById('timer-sec').innerHTML;
    var y=document.getElementById('timer-min').innerHTML;

    localStorage.setItem("sec",x);
    localStorage.setItem("min",y);
    console.log('the seconds are: '+localStorage.getItem('sec'));
    console.log('the minutes are: '+localStorage.getItem('min'));

}