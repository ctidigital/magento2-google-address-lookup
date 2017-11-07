/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital
 */
define(['GoogleAddressLookup/model/address/addressData'], function (addressData) {
    'use strict';

    describe('AddressData', function () {
        it('has default shippingData form set with empty data', function() {
            expect(addressData.forms['shippingAddress']).toBeDefined();
        });

        it('has default billingData form set with empty data', function() {
            expect(addressData.forms.shippingAddress).toBeDefined();
        });

        it('has proper elements definition', function() {
           expect(addressData.elements).toEqual({
               street_number: 'short_name',
               route: 'long_name',
               locality: 'long_name',
               administrative_area_level_1: 'short_name',
               country: 'long_name',
               postal_code: 'long_name',
               postal_town: 'long_name',
           });
        });

        describe('.addForm(id)', function() {
            it(' adds new form to a pool', function() {
                var formId = 'someID';
                addressData.addForm(formId);
                expect(addressData.forms[formId]).toBeDefined();
            });
        });

        describe('.getForm(id)', function() {
            it ('return a form if exists', function() {
                expect(addressData.getForm('shippingAddress')).toBeDefined();
            });

            it ('returns false if form does not exist', function() {
                expect(addressData.getForm('unknown-form')).toEqual(false);
            });
        });
    });
});
