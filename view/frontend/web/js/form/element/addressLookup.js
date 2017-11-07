'use strict';

/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define(['ko', 'Magento_Ui/js/form/element/abstract', 'GoogleAddressLookup/model/apiLoadListener', 'GoogleAddressLookup/model/google/initializer', 'GoogleAddressLookup/model/google/strategy/default', 'GoogleAddressLookup/model/address/addressData'], function (ko, Element, loadListener, Initializer, Strategy, addressData) {
    'use strict';

    return Element.extend({
        onElementRender: function onElementRender(el) {
            var _this = this;

            if (!loadListener.isGoogleApiLoaded()) {
                loadListener.subscribe(function (isApiLoaded) {
                    if (isApiLoaded) {
                        _this.initializer = new Initializer(el, Strategy, _this.autocomplete_id);
                    }
                });
            } else {
                this.initializer = new Initializer(el, Strategy, this.autocomplete_id);
            }
        },
        initialize: function initialize() {
            var _this2 = this;

            this._super();
            this.isShowDetails = addressData.getForm(this.autocomplete_id).isShowDetails;
            this.value = ko.observable('');

            addressData.getForm(this.autocomplete_id).country.subscribe(function () {
                _this2.value('');
            });

            return this;
        },
        toggleAddressData: function toggleAddressData(data, evt) {
            evt.preventDefault();
            addressData.getForm(this.autocomplete_id).isShowDetails(true);
        }
    });
});
//# sourceMappingURL=addressLookup.js.map
