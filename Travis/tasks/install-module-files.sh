#!/usr/bin/env bash
#### Copy module files from current travis directory to a module root path

echo Packing module files
tar --exclude="./magento2" -czf module.tar.gz .

cd magento2
mkdir -p ${MODULE_PATH}

echo Extracting module files to ${MODULE_PATH}
tar -xf ../module.tar.gz -C ${MODULE_PATH}
