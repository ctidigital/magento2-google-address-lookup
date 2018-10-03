'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define(['GoogleAddressLookup/model/address/addressData'], function (addressData) {
    "use strict";

    var Initializer = function () {
        /**
         * @param {element} el
         * @param Strategy
         * @param {string} scope
         * @param {bool} init
         */
        function Initializer(el, Strategy, scope) {
            var init = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

            _classCallCheck(this, Initializer);

            this.el = el;
            this.Strategy = Strategy;
            this.form = addressData.getForm(scope);

            if (init) {
                this.initAutocomplete(el);
            }
        }

        /**
         * Initializes google place autocomplete.
         *
         * @param {element} el
         */


        _createClass(Initializer, [{
            key: 'initAutocomplete',
            value: function initAutocomplete(el) {
                var _this = this;

                var instance = new google.maps.places.Autocomplete(el);
                if (this.form.country()) {
                    instance.setComponentRestrictions({ 'country': this.form.country() });
                }

                this.form.country.subscribe(function (country) {
                    instance.setComponentRestrictions({ 'country': country });
                });

                instance.addListener('place_changed', function () {
                    _this.fillInAddress(instance);
                    var eChange = new Event('change');
                    el.dispatchEvent(eChange);
                });
            }
        }, {
            key: 'fillInAddress',


            /**
             * @param {object} instance
             */
            value: function fillInAddress(instance) {
                var place = instance.getPlace();
                if (!place.geometry) {
                    return;
                }

                var strategy = new this.Strategy(place);
                var newAddressData = strategy.getAddressData();

                if (newAddressData) {
                    this.form.address(newAddressData);
                    this.form.isShowDetails(true);
                }
            }
        }]);

        return Initializer;
    }();

    return Initializer;
});
//# sourceMappingURL=initializer.js.map
