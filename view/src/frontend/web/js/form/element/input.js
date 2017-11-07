/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define([
    'ko',
    'Magento_Ui/js/form/element/abstract',
    'GoogleAddressLookup/model/address/addressData',
    'GoogleAddressLookup/model/address/addressFieldsMap',
    'GoogleAddressLookup/model/address/valueExtractor'
], function (ko, Element, addressData, addressFieldsMap, valueExtractor) {
    "use strict";

    return Element.extend({
        initialize: function () {
            this._super();
            this.visible(false);
            const form = addressData.getForm(this.autocomplete_id);

            form.isShowDetails.subscribe((isEnterManually) => {
                this.visible(isEnterManually);
            });

            form.address.subscribe((address) => {
                if (addressFieldsMap.map[this.inputName]) {
                    this.value(valueExtractor(address, addressFieldsMap.map[this.inputName]));
                }
            });

            return this;
        }
    });
});
