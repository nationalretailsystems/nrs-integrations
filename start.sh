#!/bin/sh
NODE_HOME=/QOpenSys/pkgs/bin
ECNCT_HOME=/QOpenSys/opt/eradani/eradani-inout-template

NODE_ENV=production
export NODE_ENV

PATH=$NODE_HOME:$PATH

nginx -s reload || nginx

cd $ECNCT_HOME
npm start
