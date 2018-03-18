#!/usr/bin/env bash
#### Copy module tests to dev/tests directory and run jasmine spec

SPEC=${1:-"blank"}

cd magento2

mkdir -p dev/tests/js/jasmine/tests/${MODULE_PATH}
cp -R ${MODULE_PATH}/Test/js/* dev/tests/js/jasmine/tests/${MODULE_PATH}

grunt spec:$SPEC
