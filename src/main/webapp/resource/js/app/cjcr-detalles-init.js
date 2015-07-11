var App_DetallesInit = _package('App.DetallesInit');

$.support.cors = true;

App_DetallesInit.init = function (){
    var DetallesView = App_DetallesView;

    DetallesView.init();
};

$(function() {
    App_AppConfig.init(App_DetallesInit.init);
});
