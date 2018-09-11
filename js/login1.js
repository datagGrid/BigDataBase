window.onload=function(){
	let oError=document.querySelector(".error");
	let oRight=document.querySelector(".right");
	let oError_info=document.querySelector(".error_info");
	let oUser=document.getElementById("user");
	let oPwd=document.getElementById("pwd");
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
