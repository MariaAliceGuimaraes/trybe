#!/bin/bash

FILE=$1

if [ -f "$FILE" ]
    then 
        echo "O $FILE e um diretorio"
elif [ -d "$FILE" ]
    then
        echo "O $FILE e um arquivo"
else 
    echo "Nao sei o que $FILE e"
fi 
ls -l $FILE