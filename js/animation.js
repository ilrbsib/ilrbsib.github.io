function getStyle(ele,property){
	 if(getComputedStyle){
		 return getComputedStyle(ele)[property]
	 }else{
		 return ele.currentStyle[property];
	 }
}
function animation(ele,propertys){
		clearInterval(ele.timerId);
		ele.timerId = setInterval(function(){
			
			for(var property in propertys)
			{
				var target = propertys[property];
				
				if(property == "opacity"){
					var current = Math.round(parseFloat(getStyle(ele,"opacity")*100));
					var speed = (target - current) / 25;
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					ele.style.opacity = (current + speed)/100;
				}else{
					
					var current = parseInt(getStyle(ele,property));
					var speed = (target - current) / 30;
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					ele.style[property] = current + speed + "px";
				}
				
			}
			
	},20)
	
}