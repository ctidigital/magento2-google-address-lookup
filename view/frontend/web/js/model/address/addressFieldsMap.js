'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define([], function () {
    'use strict';

    var AddressFieldsMap = function () {
        function AddressFieldsMap() {
            var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, AddressFieldsMap);

            this.map = map;
        }

        _createClass(AddressFieldsMap, [{
            key: 'setMap',
            value: function setMap(map) {
                this.map = map;
            }
        }]);

        return AddressFieldsMap;
    }();

    return new AddressFieldsMap();
});
//# sourceMappingURL=addressFieldsMap.js.map
