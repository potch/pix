define('nunjucks', [], function() {

    var loader = new nunjucks.HttpLoader('media/templates');

    nunjucks.env = new nunjucks.Environment(loader, true);

    return nunjucks;

});