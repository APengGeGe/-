$(function() {
	//详情数据

	var id = location.search.split("=")[1];
	$.get("http://47.104.244.134:8080/goodsbyid.do", {
		id: id
	}).done(data => {
		/*console.log(data)*/
		$(".dc").html(`<img src ="${data.picurl}">`)
		$(".xq").html(`<li>
				<div class="kuai1">
					<img src ="${data.picurl}">
					<div class="kuai"></div>
				</div>
				<p>${data.name}</p>
				<p>${data.price}</p>
				<p>
					<span class="minus">-</span>
					<input type="text" class="num" value="1">
					<span class="add">+</span>
				</p>
				<p><input type="button" class="btn" value="加入购物车"></p>
				</li>
		`)

		$(".btn").click(function(){
			window.location.href = "gouwuche.html";
		})
		//点击减
		$(".minus").click(function() {
			var user = $(".num").val();
			$(".num").val(user-1)
			if($(".num").val() <= 1) {
				$(".num").val(1)
			}
		})

		//点击加
		$(".add").click(function() {
			console.log("aa")
			var user=parseInt($(".num").val())
			$(".num").val(user+1)
		})

		//点购物车
		$(".btn").click(function(){
			var token = localStorage.getItem("token");
			$.get("http://47.104.244.134:8080/cartlist.do",{"token":token}).done(data=>{
						for(var i=0;i<data.length;i++){
							var id1 = data[i].id;
							var gid = dada[i].id
							var num = parseInt($(".num").val());
							
						if(id==gid){
						$.get("http://47.104.244.134:8080/cartupdate.do",{
							id:cart_id,						
							gid:gid,
							num:num,
							token:token}).done(data=>{
					console.log(data);
				})
					}		
						}
						})
			
			
		})
				//放大镜
$(".kuai1").mouseover(function(){
		$(".kuai").css("display","block");
	$(".kuai1").mouseout(function(){
		$(".kuai").css("display","none");
		})	
		
		$(".kuai1").mousemove(function(event){
			
			var scr = $(window).scrollTop()
			var x = event.pageX- $(".kuai").width()/2;
			var y = event.pageY- $(".kuai").height()/2 -200 ;
			
			var wid = $(".kuai1").width() - $(".kuai").width()
			var hig = $(".kuai1").height()- $(".kuai").height()
			
			x=x<0?0: x>wid?wid:x;
			y=y<0?0: x>hig?hig:y;
			
			$(".kuai").css({"left":x+"px","top":y+"px"})
			
$(".dc img").css({"left":-x/$(".kuai1").width()*$(".dc img").width()+"px"})
$(".dc img").css({"top":-y/$(".kuai1").height()*$(".dc img").height()+"px"})
		})
	})//放大镜
})
	

})