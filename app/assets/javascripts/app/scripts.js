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
		$("div.view_menu").empty();
		$("div.save-form").empty();
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
	$(".save-form").append($("#save-item").html());
	$(".create-name").on("click", function(e){
		createUser();
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
	$(".save-form").append($("#saved").html());
	$(".view_menu").append($("#view_menu").html());
}

function createUser(){
	var newUser = $("input#username").val()
	$.ajax({
		url : "/users",
		type : "post",
		data : {username: newUser}
	});
}
