function Foo(who){
    this.me = who;
}

Foo.prototype.identify = function(){
    return "I am " + this.me;
}

function Bar(who){
    console.log(this);
    console.log('^this');
    Foo.call(this, who);
}

//Bar.prototype = new Foo(); //OR
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function(){
    console.log("Hello, " + this.identify() + ".");
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();
b2.speak();