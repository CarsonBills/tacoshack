var ItemView = Backbone.View.extend({
	model: Item,
	el: "#message",
	initialize: function(){
		this.template = Handlebars.compile($("#menu-item-template").html())
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}
});