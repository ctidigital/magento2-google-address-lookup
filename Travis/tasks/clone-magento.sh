#!/usr/bin/env bash
#### Clones Magento 2 from GitHub repository with a given version

echo Disabling xdebug for performance
echo '' > ~/.phpenv/versions/$(phpenv version-name)/etc/conf.d/xdebug.ini

echo Cloning Magento..
git clone https://github.com/magento/magento2 magento2
cd magento2

echo Setting Magento version $1
git checkout tags/$1 -b $1

composer install
