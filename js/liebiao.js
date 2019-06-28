/*$(function(){
				
			$.get("http://47.104.244.134:8080/goodsbytid.do",{"tid":13,"page":1,"limit":50}).done(data=>{
					//console.log(data)数据
					var date = data.data;
					console.log(date)
					var str = "";
					for(var i=0; i<date.length;i++){
						str+= 
						`<li>
						<img src="${date[i].picurl}">
						<p>${date[i].name}</p>
						<p>${date[i].typename}</p>
						<p>${date[i].pubdate}</p>
						<input type="button" value="加入购物车" date-id="${i}">
						</li>
						`
					}
					$("#liebiao").html(str)
					
					
				})
				
			})*/