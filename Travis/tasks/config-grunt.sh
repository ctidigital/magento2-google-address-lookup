#!/usr/bin/env bash
#### Configuring grunt along with installation of npm packages

cd magento2

cp ../Travis/config/Gruntfile.js.sample Gruntfile.js
cp ../Travis/config/package.json.sample package.json
cp ../Travis/config/settings.json.sample dev/tests/js/jasmine/spec_runner/settings.json

npm install

