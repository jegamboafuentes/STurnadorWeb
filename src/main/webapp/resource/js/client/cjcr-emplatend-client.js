var Client_EmpAtenClient = _package('Client.EmpAtenClient');

Client_EmpAtenClient.GETEMPATEND = 1;

//CONSUMIR EL SERVICIO GET-TURNOSATENDIDOS
Client_EmpAtenClient.getEmpAtend = function (_idSucursal,_semanaAct,_callback, _callbackError){
    var _this = Client_EmpAtenClient;

    _this.callService(_this.GETEMPATEND, _callback, _callbackError, null, {
        idSucursal: _idSucursal,
        semanaAct: _semanaAct
    });
};

Client_EmpAtenClient.callService = function (_service, _callback, _callbackError, _data, _paths) {
    var _this = Client_EmpAtenClient;

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

Client_EmpAtenClient.callServiceSuccess = function (_data, _status, _jqXHR, _service, _callback) {
    var _this = Client_EmpAtenClient;
	
    switch(_service) {
        case _this.GETEMPATEND:
            return _this.getServiceSuccess(_data, _status, _jqXHR, _callback);
        default:
            _fail(_getMessage('invalid.service.type'));
    }
};

Client_EmpAtenClient.callServiceError = function (_jqXHR, _status, _error, 
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

Client_EmpAtenClient.getType = function(_service) {
    var _this = Client_EmpAtenClient;

    switch (_service) {
        case _this.GETEMPATEND:
            return 'GET';
        default:
            _fail(_getMessage('invalid.service.type'));
    }
};

Client_EmpAtenClient.getUrl = function(_service, _paths) {
    var _this = Client_EmpAtenClient;
    var url = _CONTEXT_PATH.concat(_get('empleadoAtendiendoServiceBase'));

    switch (_service) {
        case _this.GETEMPATEND:
            url = url.concat('idSuc/{idSucursal}/semana/{semanaAct}/');
            url = url.replace(/\{idSucursal\}/g, _paths.idSucursal);
            url = url.replace(/\{semanaAct\}/g, _paths.semanaAct);
            break;
        default:
            _fail(_getMessage('invalid.service.type'));
    }
    return url;
};

Client_EmpAtenClient.getServiceSuccess = function (_data, _status, _jqXHR, _callback) {
    _assertUndefined(_callback, _getMessage('callback.undefined'));

    _callback(_data);
};