window.onload=function () {
    let li=document.querySelector("main .left ul li:nth-child(6)");
    let tanchu=document.querySelector("main .left ul li:nth-child(6) .tanchu");
    let more=document.querySelectorAll("main .left ul li:nth-child(6) .tanchu .more");
    console.log(li);
    tanchu.style.display="none";
    li.onclick=function(){
        if(tanchu.style.display!="none"){
            tanchu.style.display="none";
        }else if(tanchu.style.display=="none"){
            tanchu.style.display="block";
        }
        li.classList.toggle("hot");
    }
    for(let i=0;i<more.length;i++){
        more[i].onclick=function () {
            for(let j=0;j<more.length;j++){
                more[j].classList.remove("hot");
            }
            more[i].classList.add("hot");
        }
    }
}