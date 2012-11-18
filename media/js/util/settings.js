define('settings', ['storage'], function(storage) {

    var settings = storage.get('settings') || {};

    function set(key, value) {
        settings[key] = value;
        storage.set('settings', settings);
    }

    function get(key, def) {
        if (key in settings) {
            return settings[key];
        } else {
            return def;
        }
    }

    return {
        get: get,
        set: set
    };
});