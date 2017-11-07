<?php
/**
 * @package  CtiDigital\GoogleAddressLookup
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */

namespace CtiDigital\GoogleAddressLookup\Block\Js;

use CtiDigital\GoogleAddressLookup\Api\AutocompleteConfigResolverInterface;
use Magento\Framework\View\Element\Template;

/**
 * Class GoogleApi
 */
class GoogleApi extends Template
{
    /**
     * @var array
     */
    private $fieldsMap;

    /**
     * @var AutocompleteConfigResolverInterface
     */
    private $configResolver;

    /**
     * GoogleApi constructor.
     *
     * @param Template\Context $context
     * @param AutocompleteConfigResolverInterface $configResolver
     * @param array $fieldsMap
     * @param array $data
     */
    public function __construct(
        Template\Context $context,
        AutocompleteConfigResolverInterface $configResolver,
        $fieldsMap = [],
        array $data = []
    ) {
        parent::__construct($context, $data);

        $this->fieldsMap = $fieldsMap;
        $this->configResolver = $configResolver;
    }

    /**
     * @return array
     */
    public function getFieldsMap()
    {
        return $this->fieldsMap;
    }

    /**
     * @return string
     */
    public function getApiKey()
    {
        return $this->configResolver->getApiKey();
    }

    /**
     * @return string
     */
    public function isEnabled()
    {
        return $this->configResolver->getIsEnabled();
    }
}
