const colors=['0','2','3','4','5','6','7','8','9','A','B','C',
'D','E','F'];
const btn=document.getElementById('btn');
const color=document.querySelector('#color');
btn.addEventListener('click',function(){
    let ran ='#';
    for(let i=0;i<6;i++){
        ran+= colors[Math.floor( Math.random() * colors.length)];
    }
    color.textContent=ran;
    document.body.style.backgroundColor= ran;
    

});