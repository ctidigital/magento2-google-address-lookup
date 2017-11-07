<?php
/**
 * @package  CtiDigital\GoogleAddressLookup
 * @author Bartosz Herba <b.herba@ctidigital.com>
 */

namespace CtiDigital\GoogleAddressLookup\System;

use CtiDigital\GoogleAddressLookup\Api\AutocompleteConfigResolverInterface;
use Magento\Framework\App\Config\ScopeConfigInterface;

/**
 * Class ConfigResolver
 */
class AutocompleteConfigResolver implements AutocompleteConfigResolverInterface
{
    /**
     * @var ScopeConfigInterface
     */
    private $scopeConfig;

    /**
     * ConfigResolver constructor.
     *
     * @param ScopeConfigInterface $scopeConfig
     */
    public function __construct(ScopeConfigInterface $scopeConfig)
    {
        $this->scopeConfig = $scopeConfig;
    }

    /**
     * @return bool
     */
    public function getIsEnabled(): bool
    {
        return $this->scopeConfig->getValue(self::PATH_IS_ENABLED);
    }

    /**
     * @return string
     */
    public function getApiKey(): string
    {
        return $this->scopeConfig->getValue(self::PATH_API_KEY);
    }
}
