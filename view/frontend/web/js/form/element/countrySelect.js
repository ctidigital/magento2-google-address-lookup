'use strict';

/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define(['ko', 'Magento_Ui/js/form/element/select', 'GoogleAddressLookup/model/address/addressData'], function (ko, Element, addressData) {
    "use strict";

    return Element.extend({
        initialize: function initialize() {
            var _this = this;

            this._super();
            this.form = addressData.getForm(this.autocomplete_id);
            this.form.country(this.value());
            this.value.subscribe(function (value) {
                _this.form.country(value);
            });

            return this;
        }
    });
});
//# sourceMappingURL=countrySelect.js.map
