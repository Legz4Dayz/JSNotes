var Router = function(){
    //Singleton:

    if(Router.__instance__) {
        return Router.__instance__;
    }

    function setRoute(match, fn){
        routes[match] = fn;
    }

    var routes = {};
    var publicAPI = Router.__instance__ = {
        setRoute: setRoute
    };
    return publicAPI;
};

var myrouter = new Router();
var another = new Router();

myrouter === another;

