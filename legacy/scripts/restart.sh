#!/bin/bash

# pm2 runs index.js in the background
# pm2 start index.js then
# pm2 startup ubuntu runs this on boot

pm2 restart ../index.js