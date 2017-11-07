'use strict';

/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define(['ko', 'Magento_Ui/js/form/components/group', 'GoogleAddressLookup/model/address/addressData'], function (ko, Element, addressData) {
    "use strict";

    return Element.extend({
        initialize: function initialize() {
            var _this = this;

            this._super();
            this.visible(false);
            this.template = 'CtiDigital_GoogleAddressLookup/form/element/group';

            addressData.getForm(this.autocomplete_id).isShowDetails.subscribe(function (isEnterManually) {
                _this.visible(isEnterManually);
            });

            return this;
        }
    });
});
//# sourceMappingURL=group.js.map
