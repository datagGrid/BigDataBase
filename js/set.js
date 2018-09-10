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
        window.open("http://localhost:63342/%E7%AC%AC%E5%85%AD%E5%91%A8/UEK_Pro/destroy.html?_ijt=3ibglu8a86g3olb2nnpvueecns");
    }
    bt2.onclick=function () {
        black.style.display="none";
        document.body.style.overflow="auto";
    }
}