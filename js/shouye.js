$(function() {
	var name = localStorage.getItem("Apeng")
	if(name != null){
		$("#id1").html(name)
	}
	$(".zhang").mouseover(function() {
		$(".zhang1").css({
			"display": "block",
			"border": "1px solid yellow"
		})
	})
	$(".zhang").mouseout(function() {
		$(".zhang1").css({
			"display": "none"
		})
	})
	$(".ke1").mouseover(function() {
		$(".ke").css({
			"display": "block"
		})
	})
	$(".ke1").mouseout(function() {
		$(".ke").css({
			"display": "none"
		})
	})

	$(".ce li").eq(0).mouseover(function() {
		$(".xing").css({
			"display": "block"
		});
	})
	$(".ce li").eq(1).mouseover(function() {
		$(".qian").css({
			"display": "block"
		});
	})
	$(".ce li").eq(2).mouseover(function() {
		$(".chong").css({
			"display": "block"
		});
	})
	$(".ce li").eq(3).mouseover(function() {
		$(".ding").css({
			"display": "block"
		});
	})
	$(".ce li").eq(0).mouseout(function() {
		$(".xing").css({
			"display": "none"
		});
	})
	$(".ce li").eq(1).mouseout(function() {
		$(".qian").css({
			"display": "none"
		});
	})
	$(".ce li").eq(2).mouseout(function() {
		$(".chong").css({
			"display": "none"
		});
	})
	$(".ce li").eq(3).mouseout(function() {
		$(".ding").css({
			"display": "none"
		});
	})

	$(".ce li").eq(3).click(function() {
		$('html , body').animate({
			scrollTop: 0
		}, 500);
	});
})

//轮播图
$(function() {
	var count = 0;
	//自动轮播
	setInterval(function() {
		count++;
		if($(".lun1 img").length == count) {
			count = 0;
		}
		$(".lun1 img").eq(count).fadeIn().siblings().fadeOut()

		$("#yu li").eq(count).addClass("select").siblings().removeClass("select")
	}, 2000)
	//点击左箭头
	$(".zu").click(function() {
		count--;
		if(count <= 0) {
			count = $(".lun1 img").length - 1;
		}
		$(".lun1 img").eq(count).fadeIn().siblings().fadeOut()

		$("#yu li").eq(count).addClass("select").siblings().removeClass("select")
	})
	//点击右箭头
	$(".yo").click(function() {
		count++;
		if(count >= $(".lun1 img").length) {
			count = 0;
		}
		$(".lun1 img").eq(count).fadeIn().siblings().fadeOut()

		$("#yu li").eq(count).addClass("select").siblings().removeClass("select")
	})

	$("#yu li").mouseover(function() {
		var index = $(this).index();
		$(".lun1 img").eq(index).fadeIn().siblings().fadeOut()

		$("#yu li").eq(index).addClass("select").siblings().removeClass("select")
	})

	$(".fu li").eq(0).mouseover(function() {
		$(".fu1").css({
			"display": "block"
		})
		$(".fu2").css({
			"display": "none"
		})
		$(".fu3").css({
			"display": "none"
		})
	})
	$(".fu li").eq(1).mouseover(function() {
		$(".fu1").css({
			"display": "none"
		})
		$(".fu2").css({
			"display": "block"
		})
		$(".fu3").css({
			"display": "none"
		})

	})
	$(".fu li").eq(2).mouseover(function() {
		$(".fu1").css({
			"display": "none"
		})
		$(".fu2").css({
			"display": "none"
		})
		$(".fu3").css({
			"display": "block"
		})

	})

	$(".bao2 img").mouseover(function() {
		$(this).animate({
			"width": "210px",
			"height": "210px"
		})
	}).mouseout(function() {
		$(this).animate({
			"width": "150px",
			"height": "150px"
		})
	})
	$(".bao3 img").mouseover(function() {
		$(this).animate({
			"width": "210px",
			"height": "210px"
		})
	}).mouseout(function() {
		$(this).animate({
			"width": "150px",
			"height": "150px"
		})
	})

	$(".hao2").click(function() {
		$(".bao2").css({
			"display": "none"
		})
		$(".bao3").stop().animate({
			"left": "250px"
		}, 500)
	})
	$(".hao1").click(function() {
		$(".bao3").stop().animate({
			"left": "1213px"
		}, 500)
		$(".bao2").css({
			"display": "block"
		})

	})

	$(".tui2").click(function() {
		$(".tui3").css({
			"display": "none"
		})
		$(".tui4").css({
			"display": "block"
		})
		$(".tui4").stop().animate({
			"left": "0px"
		}, 500)
	})
	$(".tui1").click(function() {
		$(".tui4").stop().animate({
			"left": "1213px"
		}, 500)
		$(".tui4").css({
			"display": "none"
		})
		$(".tui3").css({
			"display": "block"
		})
	})

	$(".tui img").mouseover(function() {
		$(this).stop().animate({
			"width": "240px"
		})
	}).mouseout(function() {

		$(this).stop().animate({
			"width": "220px"
		})
	})

	$(".jian img").mouseover(function() {
		$(this).stop().animate({
			"left": "20px"
		}, 500)
	}).mouseout(function() {
		$(this).stop().animate({
			"left": 0
		}, 500)
	})
	$(".jian div").addClass("shuang")

	//商品分类
	$.get("http://47.104.244.134:8080/goodstypelist.do", {
		l: 1
	}).done(data => {
		/*	console.log(data)*/
		$.each(data, function(index, value) {
			$(".cao").append("<li>" + value.name + "</li>")

			$(".cao li").eq(index).mouseover(function() {
				//二级菜单
				$.get("http://47.104.244.134:8080/goodstypelist.do", {
					l: 2
				}).done(data => {
					$(".jiekou1").text("").css({
						"display": "block"
					})
					console.log(data);
					for(var i = 0; i < data.length; i++) {
						if(value.id == data[i].parentid) {
							$(".jiekou1").html("<div>" + data[i].name + "</div>")
						}
					}
				})
			}).mouseout(function() {
				$(".jiekou1").css({
					"display": "none"
				})
			})

		})

	})

//监听滚动条
	$(window).scroll(function() {
		var str = $(this).scrollTop();
		if(str > 1000) {
			$(".loutishang").css({
				"display": "block"
			})
		} else {
			$(".loutishang").css({
				"display": "none"
			})
		}

	})
	$(".louti li").mouseover(function() {
		$(this).css({
			"background": "red"
		})
	}).mouseout(function() {
		$(this).css({
			"background": ""
		})
	})

	var flag = true;
	$(window).scroll(function() {
		if(flag) {
			var str = $(this).scrollTop();
			if(str > 1600 && str < 8000) {
				$(".louti").fadeIn();
				/*$(".louti").css({"display":"block"});*/
			} else {
				$(".louti").fadeOut();
			}

		}
		$("#tizi #f1").each(function() {
			if(str > $(this).offset().top + $(this).outerHeight / 2) {
				var index = $(this).index();
				$(".louti li").eq(index).addClass("act").siblings().removeClass("act")
			}
		})
	})
	$(".louti li").click(function() {

		var index = $(this).index();
		$("body, html").animate({
			"scrollTop": $("#tizi #f1").eq(index).offset().top - 100 + "px"
		})
	});

})