<?php
/**
 * @package  CtiDigital\GoogleAddressLookup
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */

namespace CtiDigital\GoogleAddressLookup\Api;

/**
 * Interface AutocompleteConfigResolverInterface
 */
interface AutocompleteConfigResolverInterface
{
    /**
     * Configuration paths
     */
    const PATH_IS_ENABLED = 'ctidigital_sales/autocomplete/enable';
    const PATH_API_KEY = 'ctidigital_sales/autocomplete/api_key';
    const PATH_USE_REGIONS = 'ctidigital_sales/autocomplete/use_regions';

    /**
     * @return bool
     */
    public function getIsEnabled(): bool;

    /**
     * @return bool
     */
    public function getUseRegions(): bool;

    /**
     * @return string
     */
    public function getApiKey(): string;
}
