define(function(require){
	var a = require('./a');
	return {
		test:function(){
			alert('b');
			a.test();
		}
	}
});