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
	getMenuItem();
}

function getMenuItem(){
	var menuItem = $("h2#menu_item").html()
	$.ajax({
		url : "/menuitem",
		type : "post",
		data : {menu_item: menuItem}
	});
	console.log(menuItem)
}
