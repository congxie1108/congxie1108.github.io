$.fn.roundblock = function(nopadding) {    
  $(this).css("border-radius", $(this).css("height"));   
  if(nopadding != true)
	$(this).css("padding", Math.ceil($(this).height()/5.65685)+5 + "px");
};    