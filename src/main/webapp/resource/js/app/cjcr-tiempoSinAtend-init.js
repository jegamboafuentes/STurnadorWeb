var App_TiempoSinAtenderInit = _package('App.TiempoSinAtenderInit');

$.support.cors = true;

App_TiempoSinAtenderInit.init = function (){
    var TiempoSinAtenderView = App_TiempoSinAtenderView;

    TiempoSinAtenderView.init();
};

$(function() {
    App_AppConfig.init(App_TiempoSinAtenderInit.init);
});
