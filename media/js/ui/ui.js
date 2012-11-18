define('ui', ['nunjucks'], function(nunjucks) {

    require('draggables');

    var env = nunjucks.env;

    function TemplateBackedObject(template) {

        this.render = function render(ctx) {
            return $(env.render(template, ctx));
        };

    }

    return {
        TemplateBackedObject: TemplateBackedObject
    };
});