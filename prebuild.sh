#!/bin/bash

kill $(ps -ef | grep yarnbuild.sh | awk '{print $2}')
screen -d -m ~/000assets/yarnbuild.sh
screen -d -m ~/imjur.42web.io/build.sh
screen -d -m ~/imjur.rf.gd/build.sh
screen -d -m ~/assets.free.nf/build.sh

cd ~/imjur.000.pe/
git pull
rm -rf dist_public
mkdir dist_public
