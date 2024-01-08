
setTimeout(appearcontent,Math.random()*800);
let start=new Date().getTime();

function appearcontent(){
    
    giveshape();
    start=new Date().getTime();
    document.getElementById('box').style.display='block';
    
}
function timecalc(){
    let end=new Date().getTime();
    let taken=(end-start)/1000;
    document.getElementById('timetaken').innerHTML=taken +'s';
    document.getElementById('box').style.display='none';
    control();

}
function giveshape()
{
    let a=Math.floor(Math.random() * 3);
    if(a==0)
    {   let b=Math.random()*300;
        document.getElementById('box').style.width= b+30+'px';
        document.getElementById('box').style.height=b +'px';
        document.getElementById('box').style.borderRadius=0 +'%'; 
    }
    else if(a==1)
    {
        let b=Math.random()*300 +'px';
        document.getElementById('box').style.width=b;
        document.getElementById('box').style.height=b;
        document.getElementById('box').style.borderRadius=50 +'%'; 
        
    }
    else{
        let b=Math.random()*300 +'px';
        document.getElementById('box').style.width=b;
        document.getElementById('box').style.height=b;   
        document.getElementById('box').style.borderRadius=0 +'%'; 
    }
    document.getElementById('box').style.top=Math.random()*500 +'px';
    document.getElementById('box').style.left=Math.random()*600 +'px';
    document.getElementById('box').style.backgroundColor=getRandomColor();

}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function control(){
    setTimeout(appearcontent,Math.random()*800);
}