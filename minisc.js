document.getElementById('sub1').addEventListener('click',e=>{
    console.log('ok');
    var count=0.0;
    if(document.getElementById('btn11').checked){
        
        count=count+1;
    }
    if(document.getElementById('btn22').checked){
        
        count=count+1;
    }
    if(document.getElementById('btn34').checked){
        
        count=count+1.5;
    }
    if(document.getElementById('btn42').checked){
        
        count=count+1.5;
    }
    if(document.getElementById('btn52').checked){
        
        count=count+1.5;
    }
    if(document.getElementById('btn64').checked){
        
        count=count+2;
    }
    if(document.getElementById('btn72').checked){
        
        count=count+2;
    }
    if(document.getElementById('btn84').checked){
        
        count=count+1.5;
    }
    if(document.getElementById('btn94').checked){
        
        count=count+2;
    }
    if(document.getElementById('btn101').checked){
        
        count=count+1.5;
    }
    console.log(count)
localStorage.setItem('score',count);
});