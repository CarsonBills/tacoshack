function fetchItem(){
	var number = parseInt($("select#delicious").val())
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
	$("div.logo").on("click", function(e){
		fetchItem()
	});
}
function renderHeader(){
	headerView.render()
	console.log(headerView.model.toJSON())
}