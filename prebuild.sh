#!/bin/bash
screen -d -m ~/000assets/yarnbuild.sh
cd ~/imjur.000.pe/
git pull
rm -rf dist_public
mkdir dist_public
