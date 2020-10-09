var Router = function(){

    if(Router.__instance__) {
        return Router.__instance__;
    }

    Router.__instance__ = this;
    this.routes = {};
};

Router.prototype.setRoute = function(match, fn){
    this.routes[match] = fn;
}

var myrouter = new Router();
var another = new Router();

myrouter === another;