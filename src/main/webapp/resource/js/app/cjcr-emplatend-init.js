var App_EmpAtendInit = _package('App.EmpAtendInit');

$.support.cors = true;

App_EmpAtendInit.init = function (){
    var EmpAtendView = App_EmpAtendView;

    EmpAtendView.init();
};

$(function() {
    App_AppConfig.init(App_EmpAtendInit.init);
});