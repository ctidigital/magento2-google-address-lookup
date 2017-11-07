/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */

define(['ko'], function(ko) {
    "use strict";

    /**
     * Api load listener is updated after the GoogleAutocomplete script is loaded
     */
    class ApiLoadListener {
        constructor() {
            this.isGoogleApiLoaded = ko.observable(false);
        }
        /**
         * @callback callback
         */
        subscribe(callback) {
            this.isGoogleApiLoaded.subscribe(callback);
        }
    }

    return new ApiLoadListener();
});
