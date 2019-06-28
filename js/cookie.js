function setCookie(name, val, n) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	document.cookie = name + "=" + val + ";expires=" + oDate;
}

function getCookie(name) {
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0; i < arr.length; i++) {
		var str1 = arr[i]; //"a=1"  "b=2"  "c=3"
		var arr1 = str1.split("=");
		if(arr1[0] == name) {
			return arr1[1];
		}
	}

}

function removeCookie(name) {
	setCookie(name, 1, -1);
}