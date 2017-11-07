/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital
 */
define(['GoogleAddressLookup/model/address/addressFieldsMap'], function (fieldsMap) {
    'use strict';

    describe('FieldsMap', function () {
        it('is initialized with an empty map object', function () {
            expect(fieldsMap.map).toEqual({});
        });

        it('.setMap(map) sets new map object', function () {
            var map = {'from': 'to'};
            fieldsMap.setMap(map);
            expect(fieldsMap.map).toEqual(map);
        });
    });
});
