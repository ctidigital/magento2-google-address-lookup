#!/usr/bin/env bash
####################################################
## Bootstrap and execute javascript jasmine tests ##
####################################################

./Travis/tasks/clone-magento.sh ${MAGE_VERSION}
./Travis/tasks/create-database.sh
./Travis/tasks/install-magento.sh
./Travis/tasks/set-deploy-mode.sh ${MAGENTO_MODE}
./Travis/tasks/install-module-files.sh
./Travis/tasks/enable-modules.sh
./Travis/tasks/static-content-deploy.sh
./Travis/tasks/config-grunt.sh
./Travis/tasks/run-jasmine-tests.sh
