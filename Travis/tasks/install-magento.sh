#!/usr/bin/env bash
#### Installs Magento2
DB=${1:-"magento2"}

cd magento2

echo Installing magento...
php bin/magento setup:install \
    --admin-email="test@test.com" \
    --admin-firstname="Joe" \
    --admin-lastname="Doe" \
    --admin-password="$DB_PASSWORD" \
    --admin-user="admin" \
    --backend-frontname="admin" \
    --base-url="http://magento2.dev" \
    --db-host="$DB_HOST" \
    --db-name="$DB" \
    --db-user="root" \
    --session-save="files" \
    --use-rewrites=1 \
    --use-secure=0 \
    -vvv
