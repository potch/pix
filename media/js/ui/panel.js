define('Panel', ['ui', 'settings'], function(ui, settings) {

    var layouts = settings.get('layout', {});

    console.log(layouts);

    function Panel(opts) {
        var el = this.render(opts);

        var id = opts.id;

        var layout = layouts[id] || {};

        if (layout) {
            el.css({
                left: layout.left,
                top: layout.top,
            });
            if (layout.parent) {
                $('#' + layout.parent).append(el);
            } else {
                $('#app').append(el);
            }
        }

        el.on('moved', function(e, pos) {
            layout.left = pos.left;
            layout.top = pos.top;
            layouts[id] = layout;
            settings.set('layout', layouts);
        });

        return el;
    }
    Panel.prototype = new ui.TemplateBackedObject('panel.html');

    return Panel;
});