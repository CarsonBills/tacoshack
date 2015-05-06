var HeaderView = Backbone.View.extend({
	model: Header,
	el: "#header-region",
	initialize: function(){
		this.template = Handlebars.compile($("#header-template").html())
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
	}
})