#!/bin/bash
FILE="/home/lili/_ShellScript_.sh"
if [ -e $FILE]
    then
        echo "O caminho" $FILE "esta habilitado!"
fi 
if [ -w $FILE ]
    then 
        echo "Voce tem permissao para editar o aquivo $FILE"
    else
        echo "Voce nao possui permissao para editar o arquivo $FILE"
fi