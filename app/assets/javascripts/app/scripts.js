function fetchItem(){
	var number = parseInt($("select").val())
	itemModel.fetch({
		data: $.param({
			number: number
		}),
		success: function(){
			itemView.render(),
			console.log(itemView.model.toJSON())
		}
	})
}
function buttonPress(){
	$("img.logo").on("click", function(e){
	$(".save-item").empty();
		fetchItem();
		$("img.logo").addClass("animated tada");
		setTimeout(function(){
			$("img.logo").removeClass("animated tada");
			renderSaveMenuItem();
		}, 1000);
	});
}
function renderHeader(){
	headerView.render()
	console.log(headerView.model.toJSON())
}

function renderSaveMenuItem(){
	$(".save-item").append($("#save-item").html());
	$(".save-item").on("click", function(e){
		getMenuItem();
	});
}

function getMenuItem(){
	var menuItem = $("h2#menu_item").html()
	$.ajax({
		url : "/",
		type : "post",
		data : {menu_item: menuItem}
	});
	$(".save-item").empty();
	$(".save-item").append($("#saved").html());
	$(".view_menu").empty();
	$(".view_menu").append($("#view_menu").html());
}
