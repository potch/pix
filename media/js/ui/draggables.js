define('draggables', [], function() {

    function clamp(n, min, max) {
        return Math.max(Math.min(n, max), min);
    }

    var bounds = $('#app');

    var dragged = false;
    var oTop = 0;
    var oLeft = 0;
    var sTop = 0;
    var sLeft = 0;

    var width = 0;
    var height = 0;

    bounds.on('mousedown', '.draggable .handle', function(e) {
        e.preventDefault();

        dragged = $(this).parents('.draggable');

        var pos = dragged.position();

        width = bounds.width() - dragged.outerWidth() - 1;
        height = bounds.height() - dragged.outerHeight() - 1;

        oTop = e.clientY - pos.top;
        oLeft = e.clientX - pos.left;

    });

    bounds.on('mousemove', function(e) {
        if (!dragged) return;
        e.preventDefault();

        var newX = e.clientX - oLeft;
        var newY = e.clientY - oTop;

        newX = clamp(newX, 0, width);
        newY = clamp(newY, 0, height);

        dragged.css({
            left: newX + 'px',
            top: newY + 'px'
        });

    });

    $(window).on('mouseup', function(e) {
        if (!dragged) return;
        e.preventDefault();

        var newX = e.clientX - oLeft;
        var newY = e.clientY - oTop;

        newX = clamp(newX, 0, width);
        newY = clamp(newY, 0, height);

        dragged.css({
            left: newX + 'px',
            top: newY + 'px'
        });

        dragged.trigger('moved', {top: newY, left: newX});
        dragged = false;
    });

});