function Foo(who) {
    this.me = who;
}
Foo.prototype.someProperty = function() {
    return "I am " + this.me;
}

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a2.speak = function() {
    alert("Hello," + this.someProperty() + ".");
};

a1.constructor === Foo;
a1.constructor === a2.constructor;
a1.__proto__ === Foo.prototype;
a1.__proto__ === a2.__proto__ ;