#!/bin/bash         

if [-L $1]; then
	echo "vero"
else
	echo "falso"
fi

echo f


TODAY=`date +%A`
echo “Today is $TODAY”

TODAY=$(date +%A)
echo “Today is $TODAY”