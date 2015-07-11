
var App_AppConfig = _package('App.AppConfig');

App_AppConfig._INIT_LOAD_CONFIG = 2;

App_AppConfig.init = function (_callback) {
    var _this = App_AppConfig;
    var appData = App_Data;
    
    appData.loadFinished = 0;
    
    $.getJSON(_CONTEXT_PATH.concat('/resource/data/application.json'), function (data, textStatus, jqXHR) {
        appData.appConfig = data;
        
        _this.initCallback(_callback);
    });

    $.getJSON(_CONTEXT_PATH.concat('/resource/data/messages.json'), function (data, textStatus, jqXHR) {
        appData.messages = data;
        
        _this.initCallback(_callback);
    });
};

App_AppConfig.initCallback = function(_callback) {
    var _this = App_AppConfig;
    var appData = App_Data;
    
    appData.loadFinished++;

    if (appData.loadFinished === _this._INIT_LOAD_CONFIG) {
        _assertUndefined(_callback, 'Callback init is undefined');

        _callback();
    }
};
