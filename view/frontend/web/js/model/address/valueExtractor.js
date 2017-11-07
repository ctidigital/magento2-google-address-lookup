'use strict';

/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital
 */

define([], function () {
    "use strict";

    /**
     * Fields separator
     * @type {string}
     */

    var separator = '|';

    return function (address, fieldsString) {
        var fieldsList = fieldsString.split(separator);

        var value = '';
        for (var i = 0; i < fieldsList.length; i++) {
            if (address[fieldsList[i]]) {
                value = address[fieldsList[i]];
                break;
            }
        }

        return value;
    };
});
//# sourceMappingURL=valueExtractor.js.map
