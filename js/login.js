// JavaScript Document
$(document).ready(function(){
	var showNumber=$(".art").find("a");//获取按钮
	showNumber.on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		if($(this).html()=="注册"){
			$(".login").css("display","block");
			$(".dl").css("display","none");
			$(".udline").animate({left:'0'},10);
		}else if($(this).html()=="登录"){
			$(".login").css("display","none");
			$(".dl").css("display","block");
			$(".udline").animate({left:'72px'},10);
		}
	});
	var showsub=$(".submit").find("input");
	showsub.on("click",function(){ 
		 if($(this).val()=="注册知乎"){
			  if($("#name").val()==""){
				  $("#namenull").animate({right: "8%",opacity:"1",},500);			  
			  }
			  if($("#tel").val()=="" || isNaN($("#tel").val())){
				  $("#telnull").animate({right: "8%",opacity:"1",},500);
			  }
			  if($("#prd").val()=="" || $("#prd").val().length<6){
				  $("#prdnull").animate({right: "8%",opacity:"1",},500);
			  }
			  if($("#yzm").val()==""){
				  $("#yzmnull").animate({right: "8%",opacity:"1",},500);
			  }
		  }
		  if($(this).val()=="登录"){
			  if($("#tm").val()==""){
				  $("#tmnull").animate({right: "8%",opacity:"1",},500);
			  }
			  if($("#prdd").val()==""){
				  $("#prddnull").animate({right: "8%",opacity:"1",},500);
			  }
		  }
	  });
	  $("#name").focus(function(){
		  $("#namenull").animate({right: "0",opacity:"0",},500);
	  });
	  $("#tel").focus(function(){
		  $("#telnull").animate({right: "0",opacity:"0",},500);
	  });
	  $("#prd").focus(function(){
		  $("#prdnull").animate({right: "0",opacity:"0",},500);
	  });
	  $("#yzm").focus(function(){
		  $("#yzmnull").animate({right: "0",opacity:"0",},500);
	  });
	  $("#tm").focus(function(){
		  $("#tmnull").animate({right: "0",opacity:"0",},500);
	  });
	  $("#prdd").focus(function(){
	  $("#prddnull").animate({right: "0",opacity:"0",},500);
  });

});