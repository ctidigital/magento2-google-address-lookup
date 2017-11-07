/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital
 */
define([
    'jquery',
    'GoogleAddressLookup/model/apiLoadListener',
    'GoogleAddressLookup/model/google/initializer',
    'GoogleAddressLookup/model/google/strategy/default',
    'GoogleAddressLookup/model/address/addressData',
    'GoogleAddressLookup/model/address/addressFieldsMap',
    'GoogleAddressLookup/model/address/valueExtractor'
], function ($, loadListener, Initializer, Strategy, addressData, addressFieldsMap, valueExtractor) {
    const addressFinder = document.getElementById('address_finder');
    const country = document.getElementById('country');
    const form = addressData.addForm('address');

    form.country($(country).val());

    country.addEventListener('change', (event) => {
        const el = event.target;
        form.country(el.options[el.selectedIndex].value);
        addressFinder.value = '';
    }, false);

    form.address.subscribe((address) => {
        const $inputs = $('[data-address-fieldset]').find('[data-autocomplete]');

        const autocompleteField = function(index, el) {
            const id = el.getAttribute('id');
            if (addressFieldsMap.map[id]) {
                $(el).val(valueExtractor(address, addressFieldsMap.map[id]));
            }
        };

        $inputs.each(autocompleteField);
    });

    if (!loadListener.isGoogleApiLoaded()) {
        loadListener.subscribe((isApiLoaded) => {
            if (isApiLoaded) {
                new Initializer(addressFinder, Strategy, 'address');
            }
        });
    } else {
        new Initializer(addressFinder, Strategy, 'address');
    }
});
