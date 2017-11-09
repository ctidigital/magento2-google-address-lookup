#!/usr/bin/env bash
#### Set deploy mode

MODE=${1:-"developer"}
cd magento2

echo Setting magento deploy mode => $MODE
php bin/magento deploy:mode:set $MODE
