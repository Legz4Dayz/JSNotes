var Widget = {
	init: function init(width,height){
		this.width = width || 50;
		this.height = height || 50;
		this.$elem = null;
	},
	insert: function insert($where){
		if (this.$elem) {
			this.$elem.css({
				width: this.width + "px",
				height: this.height + "px"
			}).appendTo($where);
		}
	}
};

var Button = Object.create(Widget);

Button.setup = function setup(width,height,label){
	// delegated call
	this.init(width,height);
	this.label = label || "Default";

	this.$elem = $("<button>").text(this.label);
};
Button.build = function build($where) {
	// delegated call
	this.insert($where);
	this.$elem.click(this.onClick.bind(this));
};
Button.onClick = function event(evt) {
	console.log("Button '" + this.label + "' clicked!");
};

$(function(){
	var $body = $(document.body);

	var btn1 = Object.create(Button);
	btn1.setup(125,30,"Hello");

	var btn2 = Object.create(Button);
	btn2.setup(150,40,"World");

	btn1.build($body);
	btn2.build($body);

	var $TestDiv = $("#Test");

	var btn3 = Object.create(Button);
	btn3.setup(100, 30, "Test button");
	btn3.build($TestDiv);

	console.log(btn3.__proto__);

});
