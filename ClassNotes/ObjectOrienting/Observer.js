function PageController(router){
    this.router = router;
    this.router.on("navigate",
        this.fetchPage.bind(this)
    );
}

PageController.prototype.fetchPage = function(d){
    $.ajax({
        url: d.page_url
    }).done(this.loaded.bind(this, d.page_url));
};

PageController.prototype.loaded = function(d , u ){
    //display the page content from 'd'
    // ...

    this.router.emit("pageLoaded", u);
};

var router = new router();
var thepage = new PageController(router);