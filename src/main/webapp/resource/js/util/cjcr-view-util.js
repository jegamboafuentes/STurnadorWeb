
var Util_ViewUtil = _package('Util.ViewUtil');

Util_ViewUtil.replace = function(_id, _element, _class) {
    var block = '<div id="{id}">';
    var element = (!_isUndefined(_element) && !_isNull(_element) ? _element : '');
    var id = '#'.concat(_id);
    
    block = block.replace(/\{id\}/g, _id);
    
    block = block.concat(element);
    block = block.concat('</div>');
    
    $(id).replaceWith(block);
    
    if(!_isUndefined(_class) && !_isNull(_class)) {
        $(id).addClass(_class);
    }
};

Util_ViewUtil.notificacion = function(_name, _action, status, _image) {
    var aviso, tipo, msj, image ;
    if (status === true) {
        tipo = 'success';
        msj = 'correcta';
        image = (!_isUndefined(_image) && !_isNull(_image) ? _image : 'glyphicon glyphicon-floppy-saved');
    } else {
        tipo = 'danger';
        msj = 'fallida';
        image = (!_isUndefined(_image) && !_isNull(_image) ? _image : 'glyphicon glyphicon-floppy-remove');
    }
    aviso = '<div id ="notification" class="alert alert-' + tipo + '">';
    
    aviso = aviso.concat('<h5><span class="');
    aviso = aviso.concat(image + '"></span>');
    aviso = aviso.concat(' ' + _action + ' ' + msj + ': ' + _name+ '</h5>');
    aviso = aviso.concat('</div>');

    $("#notification").replaceWith(aviso);
    $("#notification")
            .hide()
            .slideDown(1000);
    setTimeout(function(){
        $("#notification").slideUp(2000);
    },2500);
};
