
var App_Alert = _package('App.Alert');

App_Alert.alert = function(_text, _title, _type, _btnText) {
    var button = $('#alertModalBtn');
    var classBtn = 'btn btn-{class}';

    _title = (!_isUndefined(_title) && !_isNull(_title)
            ? _title : _getMessage('alert.title.default'));
    _text = (!_isUndefined(_text) && !_isNull(_text)
            ? _text : '');
    _type = (!_isUndefined(_type) && !_isNull(_type)
            ? _type : _STATE_PRIMARY);
    _btnText = (!_isUndefined(_btnText) && !_isNull(_btnText)
            ? _btnText : _getMessage('alert.button.default'));

    classBtn = classBtn.replace(/\{class\}/g, _type);

    $('#alertModalTitle').text(_title);
    $('#alertModalText').text(_text);
    $('#alertModalBtnText').text(_btnText);

    button.removeClass();
    button.addClass(classBtn);

    $('#alertModal').modal('show');
};

App_Alert.status = function(_status, _class) {
    var viewUtil = Util_ViewUtil;
    var appBuilder = Builder_AppBuilder;
    var alert;

    switch(_status) {
        case _ALERT_INFO_FILTER_GEOGRAFIA:
            alert = appBuilder.getAlert(_STATE_INFO,
                    _getMessage('info.select.pais'));

            viewUtil.replace('geografiaFilterReplace', alert, _class);

        case _ALERT_INFO_FILTER_ANIO:
            alert = appBuilder.getAlert(_STATE_INFO,
                    _getMessage('info.select.anio'));

            viewUtil.replace('fechaFilterReplace', alert, _class);

        case _ALERT_INFO_FILTER_FECHA:
            alert = appBuilder.getAlert(_STATE_INFO,
                    _getMessage('info.select.anio'));

            viewUtil.replace('fechaFilterReplace', alert, _class);


        case _ALERT_INFO_FILTER_SET_TIENDAS:
            alert = appBuilder.getAlert(_STATE_INFO,
                    _getMessage('info.select.geografia'));

            viewUtil.replace('tiendasSetReplace', alert, _class);
            break;
        case _ALERT_INFO_LOAD_SUCURSALES:
            alert = appBuilder.getAlert(_STATE_INFO,
                    _getMessage('info.load.sucursales'));

            viewUtil.replace('tiendaListReplace', alert, _class);
            break;
        case _ALERT_DANGER_FILTER_PAIS:
            alert = appBuilder.getAlert(_STATE_DANGER,
                    _getMessage('error.paises.not.found'));

            viewUtil.replace('paisFilterReplace', alert, _class);
            break;
        case _ALERT_DANGER_FILTER_GEOGRAFIA:
            alert = appBuilder.getAlert(_STATE_DANGER,
                    _getMessage('error.geografias.not.found'));

            viewUtil.replace('geografiaFilterReplace', alert, _class);
            break;
        case _ALERT_DANGER_FILTER_SET_TIENDAS:
            alert = appBuilder.getAlert(_STATE_DANGER,
                    _getMessage('error.geografia.not.found'));

            viewUtil.replace('tiendasSetReplace', alert, _class);
            break;
        case _ALERT_WARNING_FILTER_SUCURSALES:
            alert = appBuilder.getAlert(_STATE_WARNING,
                    _getMessage('warn.sucursales.not.found'));

            viewUtil.replace('tiendaListReplace', alert, _class);
            break;
        case _ALERT_DANGER_FILTER_ANIO:
            alert = appBuilder.getAlert(_STATE_DANGER,
                    _getMessage('error.anio.not.found'));

            viewUtil.replace('anioFilterReplace', alert, _class);
            break;
        case _ALERT_DANGER_FILTER_FECHA:
            alert = appBuilder.getAlert(_STATE_DANGER,
                    _getMessage('error.fechas.not.found'));
            viewUtil.replace('fechaFilterReplace', alert, _class);
            break;
        case _ALERT_WARNING_NOMBRE:
            alert = appBuilder.getAlert(_STATE_WARNING,
                    _getMessage('warn.name.not.found'), 'margin-auto');
            viewUtil.replace('nombreInputReplace', alert, _class);
            break;
        case _ALERT_INFO_UNDNEGOCIO:
            alert = appBuilder.getAlert(_STATE_WARNING,
                _getMessage('info.select.undNegocio'), 'margin-auto');
            viewUtil.replace('alert.message.selection.undnegocio', alert, _class);
            break;
        case _ALERT_DANGER_UNDNEGOCIO:
            alert = appBuilder.getAlert(_STATE_DANGER, 
                _getMessage('error.negocios.not.found'));
            viewUtil.replace('paisFilterReplace', alert, _class);
            break;
        case _ALERT_INFO_FILTER_CONCEPTO:
            alert = appBuilder.getAlert(_STATE_INFO,
                    _getMessage('info.select.top'));
            viewUtil.replace('conceptoFilterReplace', alert, _class);
            break;
		case _ALERT_WARNING_VALOR:
            alert = appBuilder.getAlert(_STATE_WARNING,
                    _getMessage('warn.valor.not.found'), 'margin-auto');
            viewUtil.replace('valorInputReplace', alert, _class);
            break;
        case _ALERT_DANGER_FILTER_CONCEPTO:
            alert = appBuilder.getAlert(_STATE_DANGER,
                    _getMessage('error.conceptos.not.found'));
            viewUtil.replace('conceptoFilterReplace', alert, _class);
            break;
        case _ALERT_DANGER_FILTER_TOPS:
            alert = appBuilder.getAlert(_STATE_DANGER,
                    _getMessage('error.tops.not.found'));
            viewUtil.replace('topFilterReplace', alert, _class);
            break;
	case _ALERT_WARNING_TIPOCOBRO:
            alert = appBuilder.getAlert(_STATE_WARNING,
                    _getMessage('warn.tipoCobro.not.found'), 'margin-auto');

            viewUtil.replace('tipoCobroInputReplace', alert, _class);
            break;
        case _ALERT_WARNING_MODIFICAR:
            alert = appBuilder.getAlert(_STATE_WARNING,
                    _getMessage('warn.valorCobro.unchanged'), 'margin-auto');

            viewUtil.replace('mensajeInputReplace', alert, _class);
            break;
        case _ALERT_WARNING_NUMEROS:
            alert = appBuilder.getAlert(_STATE_WARNING,
                    _getMessage('warn.valor.not.numeric'), 'margin-auto');
            viewUtil.replace('valorInputReplace', alert, _class);
            break;
        default:
            _fail(_getMessage('incorrect.alert.type'));
    }
};

App_Alert.statusFilter = function(_message, _replace, _bError) {
    var viewUtil = Util_ViewUtil;
    var appBuilder = Builder_AppBuilder;
    var type = (_bError ? _STATE_WARNING : _STATE_INFO);
    var alert = appBuilder.getAlert(type, _message);

    viewUtil.replace(_replace, alert);
};
