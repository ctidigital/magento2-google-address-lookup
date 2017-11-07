"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */

define(['ko'], function (ko) {
    "use strict";

    /**
     * Api load listener is updated after the GoogleAutocomplete script is loaded
     */

    var ApiLoadListener = function () {
        function ApiLoadListener() {
            _classCallCheck(this, ApiLoadListener);

            this.isGoogleApiLoaded = ko.observable(false);
        }
        /**
         * @callback callback
         */


        _createClass(ApiLoadListener, [{
            key: "subscribe",
            value: function subscribe(callback) {
                this.isGoogleApiLoaded.subscribe(callback);
            }
        }]);

        return ApiLoadListener;
    }();

    return new ApiLoadListener();
});
//# sourceMappingURL=apiLoadListener.js.map
