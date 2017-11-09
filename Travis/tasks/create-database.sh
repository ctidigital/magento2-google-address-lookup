#!/usr/bin/env bash
#### Creates database

DB=${1:-"magento2"}

echo Creating database...

mysql -e "CREATE DATABASE IF NOT EXISTS $DB;"
