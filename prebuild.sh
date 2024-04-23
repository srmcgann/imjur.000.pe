#!/bin/bash
kill $(ps -ef | grep yarnbuild.sh | awk '{print $2}')
screen -d -m ~/000assets/yarnbuild.sh
cd ~/imjur.000.pe/
git pull
rm -rf dist_public
mkdir dist_public
