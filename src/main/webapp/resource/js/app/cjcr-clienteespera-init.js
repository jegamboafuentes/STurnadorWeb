var App_ClienteEsperaInit = _package('App.ClienteEsperaInit');

$.support.cors = true;

App_ClienteEsperaInit.init = function (){
    var ClienteEsperaView = App_ClienteEsperaView;

    ClienteEsperaView.init();
};

$(function() {
    App_AppConfig.init(App_ClienteEsperaInit.init);
});
