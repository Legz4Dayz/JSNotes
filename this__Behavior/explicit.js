function foo(){
    console.log(this.bar);
}

var bar = "bar1";
var obj = { bar: "bar2" };

foo();
foo.call(obj); //uses obj's as the this.bar instead of the global bar