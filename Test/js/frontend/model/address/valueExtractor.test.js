/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital
 */

define(['GoogleAddressLookup/model/address/valueExtractor'], function (valueExtractor) {
    "use strict";

    describe('.valueExtractor(address, fieldsString)', function () {
        var address = {
            administrative_area_level_1: "England",
            country: "United Kingdom",
            postal_code: "W1D 1NU",
            postal_town: "London",
            route: "Oxford Street",
            street_number: "200",
        };

        it('if no fields matches address returns empty string', function () {
            expect(valueExtractor(address, 'unknown-field')).toEqual('');
        });

        it('if fieldsString contains address field then returns its value', function () {
            expect(valueExtractor(address, 'country')).toEqual(address.country);
        });

        it('if consecutive fieldsString contains address field then returns first match value', function () {
            expect(valueExtractor(address, 'dummy|country')).toEqual(address.country);
        });
    });
});
