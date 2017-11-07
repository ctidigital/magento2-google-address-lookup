'use strict';

/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define(['ko', 'Magento_Ui/js/form/element/abstract', 'GoogleAddressLookup/model/address/addressData', 'GoogleAddressLookup/model/address/addressFieldsMap', 'GoogleAddressLookup/model/address/valueExtractor'], function (ko, Element, addressData, addressFieldsMap, valueExtractor) {
    "use strict";

    return Element.extend({
        initialize: function initialize() {
            var _this = this;

            this._super();
            this.visible(false);
            var form = addressData.getForm(this.autocomplete_id);

            form.isShowDetails.subscribe(function (isEnterManually) {
                _this.visible(isEnterManually);
            });

            form.address.subscribe(function (address) {
                if (addressFieldsMap.map[_this.inputName]) {
                    _this.value(valueExtractor(address, addressFieldsMap.map[_this.inputName]));
                }
            });

            return this;
        }
    });
});
//# sourceMappingURL=input.js.map
