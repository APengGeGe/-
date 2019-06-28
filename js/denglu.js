$(function(){
	$("a").mouseover(function(){
		$(this).css({"color":"pink"})
	})
	$("a").mouseout(function(){
		$(this).css({"color":"#cccs"})
		
	})

	var r2= /^1[0-9]{6}/;
	$("form input:first").blur(function(){
		var text = $(this).val();
		console.log(text)
		if(text != "" ){
			$(".tu1 .sp1").html("成功")
			/*$("form input:first").val("成功")*/
		}else{
			$(".tu1 .sp1").html("失败")
			/*$("form input:first").val("失败")*/
		}
	})
	
	$("form #mi").blur(function(){
		var text = $(this).val();
		console.log(text)
		if(text != "" ){
			/*alert("成功")*/
			$(".tu1 .sp").html("成功")
		}else{
			/*alert("不对")*/
			$(".tu1 .sp").html("失败")
		}
	})

	
	$("#btn").click(function(){
		var val1 = $("#shou").val();
		var val2 = $("#mi").val();
		//掉接口
		$.post("http://47.104.244.134:8080/userlogin.do",{name:val1,password:val2}).done(data=>{
			console.log(data);
			var token = data.data.token;
			if(data.code==0){
					
			alert("登录成功")
			
			
			localStorage.setItem("Apeng",val1);
			localStorage.setItem("token",token);
			window.location.href ="shouye.html";
				}
				
				
		})
		
		
		

	})
})

































































































































