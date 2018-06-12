'use strict';

/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */

define(['ko'], function (ko) {
    "use strict";

    return {
        forms: {
            'shippingAddress': {
                isShowDetails: ko.observable(false),
                country: ko.observable(''),
                address: ko.observable({})
            },
            'billingAddress': {
                isShowDetails: ko.observable(false),
                country: ko.observable(''),
                address: ko.observable({})
            }
        },
        getForm: function getForm(id) {
            for (var key in this.forms) {
                if (this.forms.hasOwnProperty(key)) {
                    if (key === id) {
                        return this.forms[key];
                    }
                }
            }

            return false;
        },
        addForm: function addForm(id) {
            if (!this.getForm(id)) {
                this.forms[id] = {
                    isShowDetails: ko.observable(false),
                    country: ko.observable(''),
                    address: ko.observable({})
                };
            }

            return this.forms[id];
        },
        elements: {
            street_number: 'short_name',
            route: 'long_name',
            locality: 'long_name',
            administrative_area_level_1: 'long_name',
            country: 'long_name',
            postal_code: 'long_name',
            postal_town: 'long_name'
        }
    };
});
//# sourceMappingURL=addressData.js.map
