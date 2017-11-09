#!/usr/bin/env bash
#### Install composer module
cd magento2

echo Adding module github repository ${REPOSITORY}
composer config repositories.google-address-lookup vcs ${REPOSITORY}

if [ -z "${TRAVIS_TAG}" ]; then
    echo Require module branch: ${TRAVIS_BRANCH} commit: ${TRAVIS_COMMIT}
    composer require $1:dev-${TRAVIS_BRANCH}\#${TRAVIS_COMMIT}
else
    echo Require module release ${TRAVIS_TAG:1}
    composer require $1:${TRAVIS_TAG:1}
fi

composer install
