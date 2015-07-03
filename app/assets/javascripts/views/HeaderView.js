var HeaderView = Backbone.View.extend({
	events: {
		'change #username': "changeName"
	},
	model: Header,
	el: "#header-region",
	initialize: function(){
		this.template = Handlebars.compile($("#header-template").html())
	},
	changeName: function(e) {
		var val = $(e.target).val();
		this.model.set({"title" : val + "'s Taco Shack"});
		this.render()
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		buttonPress()
	}
})