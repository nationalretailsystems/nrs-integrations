#!/QOpenSys/pkgs/bin/bash
NODE_HOME=/QOpenSys/pkgs/bin
ECNCT_HOME=/QOpenSys/opt/eradani/eradani-connect-template

NODE_ENV=development
export NODE_ENV

PATH=$NODE_HOME:$PATH

cd $ECNCT_HOME
npm run start
