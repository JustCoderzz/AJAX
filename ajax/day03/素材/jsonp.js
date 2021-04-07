function jsonp (options) {
	// 创建script标签
	var script = document.createElement('script');
	// 生成随机函数名
	var fnName = 'jsonp' + Math.random().toString().replace('.', '') + new Date().getTime();
	// 为全局作用域下添加一个属性 属性的名字就是我们随机生成的函数名
	// 让属性的值指向调用jsonp函数时传递的success
	window[fnName] = options.success;
	// 参数
	var params = '';
	// 循环用户传递的参数
	for (var attr in options.data) {
		params += '&' + attr + '=' + options.data[attr]
	}
	// 为script标签设置src属性
	script.src = options.url + '?callback=' + fnName + params;
	// 将html标签追加到页面中
	document.body.appendChild(script);
	// 当script标签加载完成之后
	script.onload = function () {
		// 将script标签从页面中删除
		document.body.removeChild(this);
	}
}