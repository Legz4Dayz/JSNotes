/*
THIS rules:
1. Was the function called with 'new'? 
    -if so use that object
    -overrite any other rules because its the newest

2. Was it called with 'call' or 'apply' specifying 
    an explicit this?
    -if so use that object

3. Was the function called via a containing/owning
    object (context)?
    -if so use that object

4. DEFAULT: global object (except in strict mode)

*/


// !(function(){    //Notice how the IEFE has on the who "global"

    function something(){
        this.hello = "hello";
        console.log(this.hello, this.who);
    }

    var who = "global", foobar, bazbam,
        obj1 = { who: "obj1", something : something },
        obj2 = { who: "obj2"};

    something(); // "hello"    "global"
    
    console.log(hello); // "hello"  <-- OOPS !!

    obj1.something(); // "hello"    "obj1"
    console.log(obj1.hello); // "hello"

    obj1.something.call(obj2);  // "hello" "obj2"
    console.log(obj2.hello);    //  "hello"

    foobar = something.bind(obj2);
    foobar();   //  "hello" "obj2"
    foobar.call(obj1); // "hello" "obj2"

    bazbam = new something(); // "hello" "undefined"
    console.log(bazbam.hello); //   "hello"

    bazbam = new obj1.something(); // "hello" "undefined"
    bazbam = new foobar();  // "hello"  "undefined"
// })()