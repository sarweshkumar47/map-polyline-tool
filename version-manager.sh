#!/bin/bash
set -e

# This script will be a single source of truth for changing versions in the whole app
# Right now its only changing the version in the template (e.g index.html), but we can manage
# versions in other files such as CHANGELOG etc.

PROJECT_DIR=$(pwd)
HTML_FILE="$PROJECT_DIR/src/app/main-content/sidebar-view/sidebar-view.component.html"
PACKAGE_FILE="$PROJECT_DIR/package.json"

echo ">> Change Version to"
read -p '>> Version: ' VERSION

echo $VERSION

echo
echo "  #### Changing version number to $VERSION  ####  "
echo

#change in package.json
sed -i -E "s/\"version\"\:(.*)/\"version\"\: \"$VERSION\",/" $PACKAGE_FILE

#change in html file
sed -i -E "s/Version (.*)/Version $VERSION<\/span><\/p>/" $HTML_FILE

echo; echo "*** Mission Accomplished! ***"; echo;