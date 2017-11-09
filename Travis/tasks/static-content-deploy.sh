#!/usr/bin/env bash
#### Run static content deploy

OPTIONS=${1:-""}

cd magento2
php bin/magento setup:static-content:deploy $OPTIONS
