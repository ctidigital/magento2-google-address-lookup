/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define([
    'GoogleAddressLookup/model/address/addressData',
], function (addressData) {
    "use strict";

    class Initializer {
        /**
         * @param {element} el
         * @param Strategy
         * @param {string} scope
         * @param {bool} init
         */
        constructor(el, Strategy, scope, init = true) {
            this.el = el;
            this.Strategy = Strategy;
            this.form =  addressData.getForm(scope);

            if (init) {
                this.initAutocomplete(el);
            }
        }

        /**
         * Initializes google place autocomplete.
         *
         * @param {element} el
         */
        initAutocomplete(el) {
            const instance = new google.maps.places.Autocomplete(el, {types: ['address']});
            if (this.form.country()) {
                instance.setComponentRestrictions({'country': this.form.country()});
            }

            this.form.country.subscribe((country) => {
                instance.setComponentRestrictions({'country': country});
            });

            instance.addListener('place_changed',() => {
                this.fillInAddress(instance);
                const eChange = new Event('change');
                el.dispatchEvent(eChange);
            });
        };

        /**
         * @param {object} instance
         */
        fillInAddress(instance) {
            const place = instance.getPlace();
            if (!place.geometry) {
                return;
            }

            const strategy = new this.Strategy(place);
            const newAddressData = strategy.getAddressData();

            if (newAddressData) {
                this.form.address(newAddressData);
                this.form.isShowDetails(true);
            }
        }
    }

    return Initializer;
});
