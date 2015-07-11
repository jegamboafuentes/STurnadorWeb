var _PACKAGE_BASE = {};

var App_Data = _package('App.Data');

App_Data.appConfig = {};
App_Data.messages = {};
App_Data.block = 0;

var _QUERY_PARAMS = (function() {
    var result = {};

    if (window.location.search) {
        var params = window.location.search.slice(1).split("&");

        for (var i = 0; i < params.length; i++) {
            var tmp = params[i].split("=");

            result[tmp[0]] = unescape(tmp[1]);
        }
    }

    return result;
}());

function _package(namespace) {
    var nsparts = namespace.split('.');
    var parent = _PACKAGE_BASE;

    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];

        if (typeof parent[partname] === 'undefined') {
            parent[partname] = {};
        }

        parent = parent[partname];
    }

    return parent;
}
;

function _fail(_message) {
    throw new Error(_message);
}

function _get(_name) {
    var appConfig = App_Data.appConfig;
    var value = appConfig[_name];

    if (_isUndefined(value)) {
        if (appConfig.production) {
            value = appConfig[_name + 'Pro'];
        } else {
            value = appConfig[_name + 'Dev'];
        }
    }

    return value;
}

function _getMessage(_name) {
    var messages = App_Data.messages;

    return messages[_name];
}

function _console(_message) {
    if (!_get('production')) {
        console.log(_message);
    }
}

function _blockPage() {
    var message = _getMessage('info.espere.por.favor');
    //var message = ('espere por favor');

    message = message.concat('</br>');
    message = message.concat('<img width="30px" height="30px" src="');
    message = message.concat(_CONTEXT_PATH);
    message = message.concat(_get('ajaxLoaderUrlPart'));
    message = message.concat('"/>');

    App_Data.block++;

    if (App_Data.block === 1) {
        $.blockUI({
            message: message,
            css: {
                padding: '5px',
                width: '20%',
                left: '40%',
                border: 'none'
            }
        });
    }
}

function _unblockPage(_force) {
    if (App_Data.block > 0) {
        App_Data.block--;
    }

    if (App_Data.block === 0) {
        $.unblockUI();
    }

    if (_force) {
        App_Data.block = 0;

        $.unblockUI();
    }
}

function _trim(_string, _character, _left, _right) {
    var characters;
    var longitud;
    var i = 0;
    var j;

    _string = (_isUndefined(_string) ? null : _string);
    
    if(_string === null) {
        return _string;
    }
    
    _character = (_isUndefined(_character) ? ' ' : _character);
    _left = (_isUndefined(_left) ? true : _left);
    _right = (_isUndefined(_right) ? true : _right);
    
    longitud = _string.length;
    characters = _string.split('');
    j = longitud;

    if (_left) {
        while (i < longitud && (characters[i] === _character || characters[i] === ' ')) {
            i++;
        }
    }

    if (_right) {
        j = longitud - 1;

        while (j > -1 && (characters[j] === _character || characters[j] === ' ')) {
            j--;
        }

        j++;
    }

    return (i <= j ? _string.substring(i, j) : '');
}
