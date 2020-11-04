function Foo(who){
    this.me = who;
}

Foo.prototype.identify = function(){
    console.log("I am " + this.me);
}

function Bar(who){
    // console.log(this);   Constructor
    // console.log('^this');
    Foo.call(this, who);
}

//Bar.prototype = new Foo(); //OR
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function(){
    console.log("Hello, I am Bar.");
};

Bar.prototype.identify = function(){
    console.log("Bar Identity");
}

Bar.prototype.all = function(){
    this.identify();
    this.speak();
    console.log('All Test^');
}

var b1 = new Bar("b1");
var b2 = new Bar("b2");

// b1.speak();
// b1.identify();
// b2.speak();
// b2.identify()

// var f1 = new Foo("f1");
// // f1.speak(); not defined
// f1.identify()

b1.all();
