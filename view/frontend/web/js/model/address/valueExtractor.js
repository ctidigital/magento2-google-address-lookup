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
        for (let i = 0; i < fieldsList.length; i++) {
            if (address[fieldsList[i]]) {
                value = address[fieldsList[i]];
            }
            if(fieldsString == "street" || fieldsList[i]=="street"){
                value = address["street_number"] + ' ' + address["route"];
            }
            if(fieldsString=="administrative_area_level_1" || fieldsList[i]=="administrative_area_level_1") {
                if (document.getElementById('region_id')) {
                    var regionSelector = document.getElementById('region_id');
                    var region = address[fieldsString];
                    for (i = 0; i < regionSelector.length; i++) {
                        if (regionSelector.options[i].text === region) {
                            regionSelector.selectedIndex = i;
                            break;
                        }
                    }
                }
            }
        }
        return value;
    };
});
//# sourceMappingURL=valueExtractor.js.map
