#!/bin/bash
git pull
cd ~/imjur.000.pe
cp ~/imjur.000.pe/dist/. ~/imjur.000.pe/dist_public/. -r
php ~/imjur.000.pe/push_dir.php
git add .
git commit -m 'sync'
git push
