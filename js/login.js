window.onload=function(){
	let oError=document.querySelector(".error");
	let oShade=document.querySelector(".shade");
	let oBack=document.querySelector(".back");
	let oClose=document.querySelector(".close");
	let oRight=document.querySelector(".right");
	let oError_info=document.querySelector(".error_info");
	let oUser=document.getElementById("user");
	let oCenterbox=document.getElementById("center_box");
	let oPwd=document.getElementById("pwd");
	oBack.onclick=function(){
		oShade.style.display="block";
		oCenterbox.style.display="block";
	}
	oClose.onclick=function(){
		oShade.style.display="none";
		oCenterbox.style.display="none";
	}
	
	oUser.onblur=function(){
		if(oUser.value.length!=11){
			oError.style.display="block";
			oError_info.style.display="block";
		}else{
			oError.style.display="none";
			oError_info.style.display="none";
		}
	}
	oPwd.onblur=function(){
		if(oPwd.value.length==6){
			oRight.style.display="block";
		}else{
			oRight.style.display="none";
		}
	}
	
	
}
