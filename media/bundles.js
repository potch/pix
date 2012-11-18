bundles.root = 'media/';

bundles.css = {
    'main': [
        'reset.css',
        'app.less',
        'panel.less',
        'rail.less'
    ]
};

bundles.js = {
    'main': [
        'lib/jquery-1.8.3.min.js',
        'lib/nunjucks-dev.js',
        'lib/almond.js',
        'lib/rsvp-amd.js',
        'util/nunjucks.js',
        'util/storage.js',
        'util/settings.js',
        'ui/ui.js',
        'ui/palette.js',
        'ui/draggables.js',
        'ui/panel.js',
        'app.js'
    ],
    'less': [
        'lib/less-1.3.1.min.js'
    ]
};
