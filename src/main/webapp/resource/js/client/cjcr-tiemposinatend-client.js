var Client_TiempoSinAtenderClient = _package('Client.TiempoSinAtenderClient');

Client_TiempoSinAtenderClient.GETTIEMPOSINATEND = 1;

Client_TiempoSinAtenderClient.getTiempoSinAtender = function (_idSucursal,_semanaAct,_callback, _callbackError){
    var _this = Client_TiempoSinAtenderClient;

    _this.callService(_this.GETTIEMPOSINATEND, _callback, _callbackError, null, {
        idSucursal: _idSucursal,
        semanaAct: _semanaAct
    });
};

Client_TiempoSinAtenderClient.callService = function (_service, _callback, _callbackError, _data, _paths) {
    var _this = Client_TiempoSinAtenderClient;

    _data = (!_isUndefined(_data) && !_isNull(_data) ? _data : '');
    
    _blockPage();
    
    $.ajax(_this.getUrl(_service, _paths), {
        type: _this.getType(_service),
        data: JSON.stringify(_data),
        contentType: 'application/json',
        dataType: 'json',
        success: function (_data, _status, _jqXHR) {
            _this.callServiceSuccess(_data, _status, _jqXHR, _service, _callback);
        },
        error: function (_jqXHR, _status, _error) {
            _this.callServiceError(_jqXHR, _status, _error, _callbackError, _service);
        },
        complete: function(_status, _jqXHR) {
            _unblockPage();
        }
    });
};

Client_TiempoSinAtenderClient.callServiceSuccess = function (_data, _status, _jqXHR, _service, _callback) {
    var _this = Client_TiempoSinAtenderClient;
	
    switch(_service) {
        case _this.GETTIEMPOSINATEND:
            return _this.getServiceSuccess(_data, _status, _jqXHR, _callback);
        default:
            _fail(_getMessage('invalid.service.type'));
    }
};

Client_TiempoSinAtenderClient.callServiceError = function (_jqXHR, _status, _error, 
    _callbackError, _service) {
    var message = 'service: {service}, status: {status}, error: {error}';
	
    message = message.replace(/\{error\}/g, JSON.stringify(_error));
    message = message.replace(/\{service\}/g, _service);
    message = message.replace(/\{status\}/g, _status);
	
    _console(message);
    
    if (!_isUndefined(_callbackError) && !_isNull(_callbackError)) {
    	_callbackError();
    }
};

Client_TiempoSinAtenderClient.getType = function(_service) {
    var _this = Client_TiempoSinAtenderClient;

    switch (_service) {
        case _this.GETTIEMPOSINATEND:
            return 'GET';
        default:
            _fail(_getMessage('invalid.service.type'));
    }
};

Client_TiempoSinAtenderClient.getUrl = function(_service, _paths) {
    var _this = Client_TiempoSinAtenderClient;
    var url = _CONTEXT_PATH.concat(_get('tiempoSinAtenderServiceBase'));

    switch (_service) {
        case _this.GETTIEMPOSINATEND:
            url = url.concat('idSuc/{idSucursal}/semana/{semanaAct}/');
            url = url.replace(/\{idSucursal\}/g, _paths.idSucursal);
            url = url.replace(/\{semanaAct\}/g, _paths.semanaAct);
            break;
        default:
            _fail(_getMessage('invalid.service.type'));
    }
    return url;
};

Client_TiempoSinAtenderClient.getServiceSuccess = function (_data, _status, _jqXHR, _callback) {
    _assertUndefined(_callback, _getMessage('callback.undefined'));

    _callback(_data);
};