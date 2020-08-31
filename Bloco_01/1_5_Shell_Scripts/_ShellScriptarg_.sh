#!/bin/bash

ARGUMENTO=$1

if [ -d $ARGUMENTO ] 
    then 
        ARQUIVOS=`ls -l $ARGUMENTO | wc -l`
        echo "$ARGUMENTO tem $ARQUIVOS dentro dele"
else 
    echo "$ARGUMENTO nao e um diretorio"
fi