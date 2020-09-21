ssh -t aidan@barbieux.dev "cd ~/web/prod-master/ ; rm -rf ./build ; git fetch --all ; git reset --hard origin/master ; pm2 restart . ; exit ; bash"
