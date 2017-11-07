/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define([],function() {
    'use strict';

    class AddressFieldsMap {
        constructor(map = {}) {
            this.map = map;
        }

        setMap(map) {
            this.map = map;
        }
    }

    return new AddressFieldsMap();
});
