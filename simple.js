const colors= ["red","green","grey"];
const btn= document.getElementById('btn');
const color=document.querySelector('#color');
btn.addEventListener('click',function() {
    const ran=getran();
    document.body.style.backgroundColor = colors[ran];
    color.textContent=colors[ran];
    console.log(ran);



});

function getran(){
    return Math.floor( Math.random()*colors.length);

}