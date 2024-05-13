#!/bin/sh
NODE_HOME=/QOpenSys/pkgs/bin
ECNCT_HOME=/QOpenSys/opt/eradani/prod/nrs-integrations-39

NODE_ENV=production
export NODE_ENV

PATH=$NODE_HOME:$PATH

PM2_HOME=/home/ECIPRD/pm2-39/.pm2
export PM2_HOME

cd $ECNCT_HOME
npx pm2 start --no-daemon --env production
