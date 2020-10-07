

define("foo", function inner(){

    var o = { bar: "bar" };

    return {
        bar : function(){
            console.log(o.bar);
        }
    };
});