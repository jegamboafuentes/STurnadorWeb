var App_TurnosAtendiosInit = _package('App.TurnosAtendiosInit');

$.support.cors = true;

App_TurnosAtendiosInit.init = function (){
    var turnosAtendiosView = App_TurnosAtendiosView;

    turnosAtendiosView.init();
};

$(function() {
    App_AppConfig.init(App_TurnosAtendiosInit.init);
});
