#!/usr/bin/env bash
#### Enables required modules
MODULES=${1:-"--all"}

cd magento2
php bin/magento module:enable $MODULES
