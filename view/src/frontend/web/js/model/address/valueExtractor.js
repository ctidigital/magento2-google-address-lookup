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
    const separator = '|';

    return function (address, fieldsString) {
        const fieldsList = fieldsString.split(separator);
        let value = '';

        for (let i = 0; i < fieldsList.length; i++) {
            if (address[fieldsList[i]]) {
                value = address[fieldsList[i]];
                break;
            }
        }

        return value;
    };
});
