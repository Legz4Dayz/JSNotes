function Foo(who){
    this.me = who;
}

Foo.prototype.anyFunction = function identifier() {
    return "I am " + this.me
};

Foo.prototype.anotherFunction = function alerter() {
    console.log("Hello " + this.anyFunction() + ".");
};

var a1 = new Foo("a1");
a1.anotherFunction();

var a2 = new Foo("a2");
a2.anotherFunction();

Foo.prototype.newFunction = function newFunction(){
    console.log('Works for ' + this.me);
}

a1.newFunction();
a2.newFunction();

console.log(a1.__proto__);
console.log(a1.__proto__.anyFunction());

// a1.constructor === Foo;
// a1.constructor === a2.constructor;
// a1.__proto__ === Foo.prototype;
// a1.__proto__ === a2.__proto__ ;

function Bar(who){
    this.bar = who;
}
Bar.prototype.barProtoFunc = function barFunc(){
    console.log('bar');
}

var b1 = new Bar("b1");
b1.barProtoFunc();
// b1.anyFunction(); Does not work