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
		fetchItem()
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
	
}
