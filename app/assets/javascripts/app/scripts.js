function fetchItem(){
	todoModel.fetch({
		data: $.param({
			number: number
		}),
		success: function(){
			todoView.render(),
			console.log(todoView.model.toJSON())
		}
	})
}
function buttonPress(){
	$("#generate").on("click", function(e){
		fetchItem()
	});
}