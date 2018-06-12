<?php
/**
 * @package  CtiDigital\GoogleAddressLookup
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */

namespace CtiDigital\GoogleAddressLookup\Block\Checkout;

use CtiDigital\GoogleAddressLookup\Api\AutocompleteConfigResolverInterface;
use Magento\Checkout\Block\Checkout\LayoutProcessorInterface;

/**
 * Class LayoutProcessor
 */
class LayoutProcessor implements LayoutProcessorInterface
{
    /**
     * @var AutocompleteConfigResolverInterface
     */
    protected $configResolver;

    /**
     * @var array
     */
    protected $paymentsList;

    /**
     * @var array
     */
    protected $addressFields = [];

    /**
     * @var array
     */
    protected $fieldsConfig;

    /**
     * LayoutProcessor constructor.
     *
     * @param AutocompleteConfigResolverInterface $configResolver
     * @param array $fieldsConfig
     */
    public function __construct(AutocompleteConfigResolverInterface $configResolver, $fieldsConfig = [])
    {
        $this->configResolver = $configResolver;
        $this->fieldsConfig = $fieldsConfig;
    }

    /**
     * Process js Layout of block
     *
     * @param array $jsLayout
     *
     * @return array
     */
    public function process($jsLayout)
    {
        if (false === $this->configResolver->getIsEnabled()) {
            return $jsLayout;
        }

        $this->addressFields = &$jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset'];
        $this->paymentsList = &$jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']['payment']['children']['payments-list']['children'];

        $this->processShippingAddress();
        $this->processBillingAddress();

        return $jsLayout;
    }

    /**
     * Processing shipping address layout
     *
     * @return void
     */
    protected function processShippingAddress()
    {
        $this->updateStreetFields($this->addressFields['children']['street'], 'shippingAddress');

        if(false === $this->configResolver->getUseRegions()){
            unset($this->addressFields['children']['region']['filterBy']);
            unset($this->addressFields['children']['region_id']);
        }

        foreach ($this->fieldsConfig as $fieldName => $config) {
            $field = &$this->addressFields['children'][$fieldName];
            $this->configureField($field, 'shippingAddress', $config);
        }
    }

    /**
     * Processing billing address layout
     *
     * @return void
     */
    protected function processBillingAddress()
    {

        // Unlike in shipping address, on billing address there is a lot of different billing forms.
        // Each of these forms must be processed.
        foreach ($this->paymentsList as &$payment) {
            foreach ($this->fieldsConfig as $fieldName => $config) {
                if (!isset($payment['children']['form-fields'])) {
                    continue;
                }

                if ('region' === $fieldName || 'region_id' === $fieldName) {
                    $payment = $this->copyRegionLayoutFromShippingAddress($payment, $fieldName);
                }

                $field = &$payment['children']['form-fields']['children'][$fieldName];
                $this->configureField($field, 'billingAddress', $config);

                if ('street' === $fieldName) {
                    $this->updateStreetFields($field, 'billingAddress');
                }
            }
            unset($payment['children']['form-fields']['children']['region_id']);
        }
    }

    /**
     * @param array $streetField
     * @param string $scope
     *
     * @return void
     */
    protected function updateStreetFields(array &$streetField, string $scope)
    {
        foreach ($streetField['children'] as &$input) {
            $input['component'] = 'CtiDigital_GoogleAddressLookup/js/form/element/input';
            $input['autocomplete_id'] = $scope;
        }

        /**
         * There is a bug in Magento with inconsistency in validation of streets
         * in address modal and first address form.
         * In address form all street fields[$i > 0] are required but on modal only the first one.
         * This solution fix this gap.
         */
        $streetCount = count($streetField['children']);

        for ($i = 1; $i <= $streetCount; $i++) {
            $streetField['children'][$i]['validation']['min_text_length'] = 0;
        }
    }

    /**
     * @param mixed $field
     * @param string $scope
     * @param array $config
     *
     * @return $this
     */
    protected function configureField(&$field, string $scope, array $config = [])
    {
        $field = is_array($field) ? $field : [];
        $field = array_merge($field, $config);
        $field['autocomplete_id'] = $scope;

        return $this;
    }

    /**
     * @param array $payment
     * @param string$fieldName
     *
     * @return array
     */
    protected function copyRegionLayoutFromShippingAddress(array $payment, string $fieldName): array
    {
        $value = $this->addressFields['children'][$fieldName];
        $payment['children']['form-fields']['children'][$fieldName] = $value;

        return $payment;
    }
}
