'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define(['GoogleAddressLookup/model/address/addressData'], function (addressData) {
    'use strict';

    /**
     * Default strategy for filling address data from google lookup
     */

    var DefaultStrategy = function () {
        function DefaultStrategy(place) {
            _classCallCheck(this, DefaultStrategy);

            this.place = place;
        }

        _createClass(DefaultStrategy, [{
            key: 'getAddressData',
            value: function getAddressData() {
                var newaddressData = {};

                for (var i = 0; i < this.place.address_components.length; i++) {
                    var addressType = this.place.address_components[i].types[0];
                    if (addressData.elements[addressType]) {
                        newaddressData[addressType] = this.place.address_components[i][addressData.elements[addressType]];
                    }
                }

                return newaddressData;
            }
        }]);

        return DefaultStrategy;
    }();

    return DefaultStrategy;
});
//# sourceMappingURL=default.js.map
