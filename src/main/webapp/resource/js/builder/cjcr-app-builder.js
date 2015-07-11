
var Builder_AppBuilder = _package('Builder.AppBuilder');

Builder_AppBuilder.getMultiselect = function(_id, _label, _bSimple, _bReplace) {
    var _this = Builder_AppBuilder;
    var select = '<div class="form-group">';
    
    if(!_isUndefined(_label) && !_isNull(_label)) {
        select = select.concat('<label for="{id}">{label}</label>');
    }
    
    select = select.concat(_this.getMultiselectPart(_id, _bSimple, _bReplace));
    select = select.concat('</div>');
    
    select = select.replace(/\{id\}/g, _id);
    select = select.replace(/\{label\}/g, _label);
    
    return select;
};

Builder_AppBuilder.getMultiselectPart = function(_id, _bSimple, _bReplace) {
    var multiclass = (_bSimple ? '' : 'class="multiselect" multiple="multiple"');
    var select = '';
    
    if(_bReplace) {
        select = select.concat('<div id="{replace}">');
    }
    
    select = select.concat('<div class="form-control-element">');
    select = select.concat('<select id="{id}" {multiclass}>');
    select = select.concat('</select></div>');
    
    if(_bReplace) {
        select = select.concat('</div>');
        
        select = select.replace(/\{replace\}/g, _id.concat('Replace'));
    }
    
    select = select.replace(/\{id\}/g, _id);
    select = select.replace(/\{multiclass\}/g, multiclass);
    
    return select;
};

Builder_AppBuilder.getAlert = function(_type, _message, _margin) {
    var _this = Builder_AppBuilder;
    var alert = '<div class="alert alert-{key} {margin}">';
    var type = _this.getAlertType(_type);
    
    _margin = (!_isUndefined(_margin) && !_isNull(_margin) ? _margin : _margin);
    
    alert = alert.concat('<strong>{word}</strong> {message}</div>');
    
    alert = alert.replace(/\{key\}/g, type.key);
    alert = alert.replace(/\{word\}/g, type.word);
    alert = alert.replace(/\{margin\}/g, _margin);
    alert = alert.replace(/\{message\}/g, _message);
    
    return alert;
};

Builder_AppBuilder.getAlertType = function(_type) {
    var idMessage = 'alert.word.{state}';
    
    idMessage = idMessage.replace(/\{state\}/g, _type);
    
    return {
        key: _type,
        word: _getMessage(idMessage)
    };
};

Builder_AppBuilder.getConfirmDialog = function (_type, _message, _margin) {
    var _this = Builder_AppBuilder;
    var confirmDialog = '<div class="confirmDialog  confirmDialog-{key} {margin}">';
    var type = _this.getConfirmDialogType(_type);
    
    _margin = (!_isUndefined(_margin) && !_isNull(_,argin) ? _margin : _margin);
    
    confirmDialog = confirmDialog.concat('<strong>{word}</strong> {message}</div>');
    
    confirmDialog = confirmDialog.replace(/\{key\}/g, type.key);
    confirmDialog = confirmDialog.replace(/\{word\}/g, type.word);
    confirmDialog = confirmDialog.replace(/\{margin\}/g, _margin);
    confirmDialog = confirmDialog.replace(/\{message\}/g, _message);
    
    return confirmDialog;
};

Builder_AppBuilder.getConfirmDialogType = function (_type) {
    var idMessage = 'confirmDialog.word-{state}';
    
    idMessage = idMessage.replace(/\{state\}/g, _type);
    
    return {
      hey: _type,
      word: _getMessage(idMessage)
    };
};