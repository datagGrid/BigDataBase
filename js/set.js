window.onload=function () {
    let btn=document.querySelector("button");
    let black=document.querySelector(".black");
    let bt1=document.querySelector(".bt1");
    let bt2=document.querySelector(".bt2");
    console.log(btn)
    btn.onclick=function () {
        black.style.display="block";
        document.body.style.overflow="hidden";
    }
    bt1.onclick=function () {
        window.open("destroy.html");
    }
    bt2.onclick=function () {
        black.style.display="none";
        document.body.style.overflow="auto";
    }
}