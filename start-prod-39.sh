#!/bin/sh
NODE_HOME=/QOpenSys/pkgs/bin
ECNCT_HOME=/QOpenSys/opt/eradani/prod/nrs-integrations-39

NODE_ENV=production
export NODE_ENV

PATH=$NODE_HOME:$PATH

cd $ECNCT_HOME
npx pm2 start --no-daemon --env production
