$(function(){
	//电话验证：
	$("#shou").blur(function(){
		var pVal = $(this).val();
		
		var pReg = /^1[0-9]{6}$/;
		if(pReg.test(pVal)==false){
			$(".chu").css({"display":"block"})
			return false;
		}else{
			//alert("bbb")
			$.get("http://47.104.244.134:8080/username.do",{username:$(this).val()}).done(data=>{
				//console.log(data);
				if(data.code==0){
					$(".chu").css({"display":"block"})
					return false;
				}else{
				$("#shou").css({"border-color":"green"});
				$(".chu").css({"display":"none"})
			return true;
			}
				
			
			})
			
		}		
	})
	
	//密码验证：
	$("#mi").blur(function(){
		var pwdVal = $(this).val();
		var pwdReg = /^[a-zA-Z0-9]{6,26}$/;
		
		if(pwdReg.test(pwdVal)==false){
			$(".bai").css({"display":"block"});
			return false;
		}else{
		$("#mi").css({"border-color":"green"});
		$(".bai").css({"display":"none"});
		return true;
		}
		
		
	})
	
    
  //邮箱：
    $("#email").blur(function(){
    	var mailVal = $(this).val();
    	var mailReg = /[a-z0-9A-Z]{6,20}/;
    	if(mailReg.test(mailVal)==false){
    		$(".bai1").css({"display":"block"});
			return false;    		    		   		  		
    	}else{
    		$("#email").css({"border-color":"green"});
		$(".bai").css({"display":"none"});
		return true;	
    	}
    	
    		
    		
    })
    
    	//勾选：
	$("#driverSex").click(function(){
		if($(this).prop("checked")==true){
			$(".bai2").css({"display":"none"});
			//return true;
		}else{
			$(".bai2").css({"display":"block"})
		}										
	})

$(".tu1 #zhu").click(function(){
		
			//console.log("aaa")
			var username = $("#shou").val();
			var password = $("#mi").val();
			var email = $("#email").val();
			var sex = $('input:radio[name="driverSex"]:checked').val();
			
			$.post("http://47.104.244.134:8080/usersave.do",{
				username:username,
				password:password,
				email:email,
				sex:sex
			}).done(data=>{
				console.log(data);
				alert("注册成功请登录");
				window.location.href = "denglu.html";
			})		
		
		
		
		
	})
	
	
});


	/*		//电话验证：
	$("#shou").blur(function(){
		var pVal = $(this).val();
		
		var pReg = /^1[3-9][0-9]{9}$/;
		if(pReg.test(pVal)==false){
			$(".chu").css({"display":"block"})
			return false;
		}else{
			//alert("bbb")
			$.get("http://47.104.244.134:8080/username.do",{username:$(this).val()}).done(data=>{
				//console.log(data);
				if(data.code==0){
					$(".chu").css({"display":"block"})
					return false;
				}else{
					$("#shou").css({"border-color":"green"});
			$(".chu").css({"display":"none"})
			return true;
				}
				
			
			})
			
		}		
	})
	
	//密码验证：
	$("#mi").blur(function(){
		var pwdVal = $(this).val();
		var pwdReg = /^[a-zA-Z0-9]{6,26}$/;
		
		if(pwdReg.test(pwdVal)==false){
			$(".bai").css({"display":"block"});
			return false;
		}
		$("#mi").css({"border-color":"green"});
		$(".bai").css({"display":"none"});
		return true;
		
	})
	
    
  //邮箱：
    $("#email").blur(function(){
    	var mailVal = $(this).val();
    	var mailReg = /[a-z0-9A-Z]{6,20}/;
    	if(mailReg.test(mailVal)==false){
    		$(".bai1").css({"display":"block"});
			return false;    		    		   		  		
    	}
    	$("#email").css({"border-color":"green"});
		$(".bai").css({"display":"none"});
		return true;	
    		
    		
    })
    
    	//勾选：
	$("#driverSex").click(function(){
		if($(this).prop("checked")==true){
			$(".bai2").css({"display":"none"});
			//return true;
		}else{
			$(".bai2").css({"display":"block"})
		}										
	})
	*/
	//提交：

  //验证码：
/*	$(".pho-btn").click(function(){
		$(this).val("");
		var str = "";
		while(str.length<4){
			var sum = Math.floor(Math.random()*23)+48;
			if(sum>=48&&sum<=57||sum>=65&&sum<=70){
				str += String.fromCharCode(sum);
			}
			//return str;
		}
		$(".pho-btn").val(str)
	})*/
//确认密码：
	/*$(".pwd-word").blur(function(){
		var pwdVal1 = $(this).val();
		var pwdVal = $(".pwd").val();
		if(pwdVal1!=pwdVal){
			$(".rep-words").css({"display":"block"});
			return false;
		}
		$(".pwd-word").css({"border-color":"green"});
		$(".rep-words").css({"display":"none"});
		return true;
	})*/
	