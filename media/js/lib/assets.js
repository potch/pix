var bundles = {
    root: '',
    js: {},
    css: {}
};

function css(bundle) {

    var assets = bundles.css[bundle];

    if (!assets) return;

    for (var i = 0; i < assets.length; i++) {
        var file = bundles.root + 'css/' + assets[i];
        var tag;
        if (file.split('.').pop() === 'less') {
            tag = '<link rel="stylesheet/less" type="text/css" href="' + file + '">';
        } else {
            tag = '<link rel="stylesheet" type="text/css" href="' + file + '"/>';
        }

        document.write(tag);
    }

}

function js(bundle) {

    var assets = bundles.js[bundle]

    if (!assets) return;

    for (var i = 0; i < assets.length; i++) {
        var file = bundles.root + 'js/' + assets[i];
        var tag = '<script src="' + file + '"></script>';

        document.write(tag);
    }

}


