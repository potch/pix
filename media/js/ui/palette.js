define('palette', ['Panel', 'rsvp'], function(Panel, r) {

    var palette = new Panel({
        id: 'palette',
        title: 'Color Palette',
        closable: true
    });

    $('#app').append(palette);

});