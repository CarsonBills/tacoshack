var TodoView = Backbone.View.extend({
	model: Todo,
	el: "#message",
	initialize: function(){
		this.template = Handlebars.compile($("#todo-item-template").html())
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}
});