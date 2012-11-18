define('storage', [], function() {

    var timers = {};

    function set(key, value) {
        var s = JSON.stringify(value);
        if (timers[key]) clearTimeout(timers[key]);
        timers[key] = setTimeout(function() {
            _set(key, s);
        }, 500);
    }

    function _set(key, value) {
        localStorage.setItem(key, value);
    }

    function get(key) {

        var value = localStorage.getItem(key);

        if (value === null) return;

        if (value[0] === '{' || value[0] === '[') {
            value = JSON.parse(value);
        } else if (value === 'true' || value === 'false') {
            value = value === 'true';
        }

        return value;
    }

    return {
        get: get,
        set: set
    };
});