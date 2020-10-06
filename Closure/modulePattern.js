//CLASSIC MODULE PATTERN
//used at TMC
// foo can be thought of as the public API we use while
    // o contains the private content

var foo = (function(){

    var o = { bar: "bar"};

    return{
        bar: function(){
            console.log(o.bar);
        }
    };
})();

foo.bar();

//What jquery does

var $ = (function(){

    var printJ = function(){ console.log('J'); }

    return printJ();

})

$();