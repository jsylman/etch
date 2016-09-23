$(document).ready(function(){
	for(var i = 1; i<17; i++){
		$("#wrapper").append("<div class = 'square'></div>")
	};
	$('#wrapper').on("mouseover","div",function(){
		$(this).css('background-color','blue');
	});
	$("button").click(function(){
		var newHeight = prompt("New grid height/width");
		$("#wrapper").empty();
		var wrapperWidth = newHeight*32.5
		$("#wrapper").width(wrapperWidth);
		$("#wrapper").append("<button>New Grid</button> <br>");
		for(var i = 1; i<=(newHeight*newHeight); i++){
			$("#wrapper").append("<div class = 'square'></div>")
		};
	})
});