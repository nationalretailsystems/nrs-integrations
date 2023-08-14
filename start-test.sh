#!/bin/sh
NODE_HOME=/QOpenSys/pkgs/bin
ECNCT_HOME=/QOpenSys/opt/eradani/test/nrs-integrations

NODE_ENV=test
export NODE_ENV

PATH=$NODE_HOME:$PATH

cd $ECNCT_HOME
npx pm2 start --no-daemon --env test
