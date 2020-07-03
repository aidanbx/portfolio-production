#!/usr/bin/env bash

while true; do
    read -p "Install LTS version of Node.js and npm through nvm? (Y/n) " answer
    if [[ $answer =~ ^[Yy]$ ]]; then
        echo "Okay, installing nvm etc."
        # installs nvm
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
        # adds nvm to path
        export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        # installs latest verion of node
        nvm install node --reinstall-packages-from=node
        nvm use node
        while true; do
            read -p "Install pm2 (needed)? (Y/n)" answer1
            if [[ $answer1 =~ ^[Yy]$ ]]; then
                echo "Okay"
                # installs pm2
                npm i pm2 -g
            fi
            echo "pm2 will be needed later to run in the background"
            break
        done
    else
        echo "NOT installing nvm or pm2 etc."
    fi
    break
done

while true; do
    read -p "Enter folder to store repository: " answer2
    if [[ $answer2 =~ ^.*$ ]]; then
        echo "Okay"
        # clones repository
        git clone git@github.com:abarbieu/abarbieux-site.git "$answer2"
    fi
    break
done

while true; do
    read -p "Enable firewall (ufw)? (Y/n)" answer3
    if [[ $answer3 =~ ^[Yy]$ ]]; then
        echo "Okay, setting up"
        # enables firewall
        sudo ufw enable
        sudo ufw status
        sudo ufw allow ssh
        sudo ufw allow http
        sudo ufw allow https
    else
        echo "NOT setting up firewall, must be done manually"
    fi
    break
done

while true; do
    read -p "Install NGINX? (Y/n)" answer4
    if [[ $answer4 =~ ^[Yy]$ ]]; then
        echo "Okay, setting up"
        # enables firewall
        sudo apt install nginx
        echo "Add the following to this file: /etc/nginx/sites-available/default"
        echo "
server_name yourdomain.com www.yourdomain.com;
location / {
    proxy_pass http://localhost:5000; #whatever port your app runs on
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}"
        while true; do
            read -p "Open in vim? (Y/n)" answer5
            if [[ $answer5 =~ ^[Yy]$ ]]; then
                sudo vi /etc/nginx/sites-available/default
            fi
            break
        done

        sudo nginx -t
        sudo service nginx restart
    else
        echo "NOT setting up NGINX, must be done manually"
    fi
    break
done

while true; do
    read -p "Add SSL with LetsEncrypt? (Y/n)" answer6
    if [[ $answer6 =~ ^[Yy]$ ]]; then
        echo "Okay, setting up"
        # installs certification bot
        sudo add-apt-repository ppa:certbot/certbot
        sudo apt-get update
        sudo apt-get install python-certbot-nginx
        echo "run: sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com"
    else
        echo "NOT setting up ssl certificates, site won't be secure"
    fi
    break
done
