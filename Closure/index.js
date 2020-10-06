
/*
    See how these functions are able to access on another
    and "pass" them around
*/

function foo(){
    var bar ="bar";

    function baz(){
        console.log(bar);
    }

    bam(baz);
}

function bam(baz){
    baz();      //bar
}

foo();

function f() {
    var b = "returned function";

    return function() {
        console.log(b);
    };
}

function ba(){
    f()();  //returns the nested function
}

ba();
