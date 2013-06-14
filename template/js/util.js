var texts = {
    UsersLogin : "ورود کاربران",
    Username:"نام کاربری",
    Password:"کلمه عبور",
    Login: "ورود",
    Home : "خانه",
    Cartable:"کارتابل فنی",
    Storage:"انبار",
    PM:"PM",
    Request:"کارتابل درخواست",
    ProductImport:"تامین کالا",
    ProductExport:"خروج کالا",
    ReportExport:"گزارش خروج",
    PmSubmit:"ثبت PM",
    Copyright:"هوش مصنوعی شریف"

};
(function () {
    //*******************Project Text Initializer*************************//
    //please dont intial any text inside the dom elements learn procedure and
    //use it
     textIntializer = function (domObject){
        jQuery(domObject).each(function(){
            var textInside = $(this).attr("data-prop-text");
            $(this).text(texts[textInside]);
        })
    };
    //*******************Project Text Initializer*************************//


    //*******************template Loader*************************//
    templateLoader = function (Object, address) {
        $(Object).load(address, function () {
            console.log(Object.toString() + "loaded Succecfully");
        });
    };
    templateLoader("#header", 'js/templates/headerTemplate.html');
    templateLoader("#content", 'js/templates/contentTemplate.html');
    templateLoader("#footer", 'js/templates/footerTemplate.html');
    //*******************template Loader*************************//



    //*******************plugin Intializer*************************//
})();
