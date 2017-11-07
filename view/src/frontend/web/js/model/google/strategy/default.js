/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define(['GoogleAddressLookup/model/address/addressData'], function (addressData) {
    'use strict';

    /**
     * Default strategy for filling address data from google lookup
     */
    class DefaultStrategy {
        constructor(place) {
            this.place = place;
        }

        getAddressData() {
            const newaddressData = {};

            for (let i = 0; i < this.place.address_components.length; i++) {
                let addressType = this.place.address_components[i].types[0];
                if (addressData.elements[addressType]) {
                    newaddressData[addressType] = this.place.address_components[i][addressData.elements[addressType]];
                }
            }

            return newaddressData;
        }
    }

    return DefaultStrategy;
});
