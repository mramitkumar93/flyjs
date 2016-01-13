jQuery.fn.fly = function(options) {
	var $=jQuery;
	
    //default settings:
    var defaults = {
        animateWidth: window.innerWidth,
        animateHeight: window.innerHeight,
		scrollHeight: document.body.scrollHeight,
		animateSpeed: .1,
		imageToShow: 10,
		responsive: '',
		imageWidth: 25,
		imageHeight: 25,
		imageClass: '',
		images: ['data:image/gif;base64,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']
    };
	
    var settings = $.extend( {}, defaults, options );
	
	$.each(settings.responsive,function(k,v){
		var bp = v.breakpoint;
		var ic = v.imageToShow;
		if(bp >= window.innerWidth) {
			settings.imageToShow = ic;
		}
	});
	
	var img = '';

	var flyimages = makeImages(settings.images,settings.imageToShow);
	
	$.each(flyimages,function(k,v){
		var ih = Math.floor(Math.random() * settings.animateHeight) + 1;
		var iw = Math.floor(Math.random() * settings.animateWidth) + 1;
		newq = makeNewPosition(ih,iw);
		img += '<img src="'+v+'" class="' +settings.imageClass+' fly sfly" style="position:absolute;width'+settings.imageWidth+'px;height:'+settings.imageHeight+'px;top:'+newq[0]+';left:'+newq[1]+'" >'
	});
	$(this).append(img);
	
	function makeImages(images,num) {
		var len = images.length - 1;
		var newimages = [];
		for(var i = 0; i < num; i++){
			var key = Math.floor(Math.random() * (len + 1));
			newimages[i] = images[key];
		}
		return newimages;
	}
	
	function makeNewPosition(h,w){
		var jacob = Math.floor(Math.random() * (settings.animateWidth-settings.imageWidth-50) ) + 1;
		var nh = Math.floor(Math.random() * (settings.animateHeight-settings.imageHeight-50))+jacob;
		var nw = Math.floor(Math.random() * (settings.animateWidth-settings.imageWidth-50))+jacob;
		if(nh >= (settings.animateHeight-settings.imageHeight-50))
			nh = Math.floor(Math.random() * settings.animateHeight-settings.imageHeight-50) + 1;
		if(nw >= (settings.animateWidth-settings.imageWidth-50))
			nw = Math.floor(Math.random() * settings.animateWidth-settings.imageWidth-50) + 1;	
		return [nh,nw];    
	}
	
	function animateIMG(wh,ws,obj){
		wh = parseInt(wh);
		ws = parseInt(ws);
		newq = makeNewPosition(wh,ws);
		var oldq = $(obj).offset();
		var speed = calcSpeed([oldq.top, oldq.left], newq);
		if(parseInt(oldq.left)<parseInt(newq[0])){
			$(obj).addClass("fly");
		}else{
			$(obj).removeClass("fly");
		}
		$(obj).animate({ top: newq[0], left: newq[1] }, speed, function(){
			animateIMG(parseInt(newq[0]),parseInt(newq[1]),obj);        
		});
    
	};
	
	function calcSpeed(prev, next) {
		var x = Math.abs(prev[1] - next[1]);
		var y = Math.abs(prev[0] - next[0]);
		var greatest = x > y ? x : y;
		var speed = Math.ceil(greatest/settings.animateSpeed);
		return speed;
	}
	
	$( window ).scroll(function() {	
		$('.sfly').each(function(){
			$(this).animate({"marginTop": ($(window).scrollTop()) + "px"}, "fast" );
		});
	});
	
	return $(".fly").each(function(){
		animateIMG(this.style.top,this.style.left,this);
	});
};
