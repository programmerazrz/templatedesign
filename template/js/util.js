var texts = {
    Username:"نام کاربری",
    Password:"کلمه عبور",
    Login:"ورود"

};
(function () {
    //*******************template Loader*************************//
    function templateLoader(Object, address) {
        $(Object).load(address, function () {
            console.log(Object.toString() + "loaded Succecfully");
        });

    }
    templateLoader("#header", 'js/templates/headerTemplate.html');
    templateLoader("#content", 'js/templates/contentTemplate.html');
    templateLoader("#footer", 'js/templates/footerTemplate.html');
    //*******************template Loader*************************//

    //*******************plugin Intializer*************************//
})();
