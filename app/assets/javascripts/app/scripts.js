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
	$("#generate").on("click", function(e){
		fetchItem()
	});
}