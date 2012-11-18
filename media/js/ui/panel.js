define('Panel', ['ui'], function(ui) {

    function Panel(opts) {
        var el = this.render(opts);
        return el;
    }
    Panel.prototype = new ui.TemplateBackedObject('panel.html');

    return Panel;
});