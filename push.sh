#!/bin/bash
cd /home/whitehotrobot/imjur.000.pe
cp /home/whitehotrobot/imjur.000.pe/dist/. /home/whitehotrobot/imjur.000.pe/dist_public/. -r
php /home/whitehotrobot/imjur.000.pe/push_dir.php
