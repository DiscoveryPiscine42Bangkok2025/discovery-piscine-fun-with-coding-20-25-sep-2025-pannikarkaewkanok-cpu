#!/bin/bash
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # วนลูปตาม arguments
    for arg in "$@"
    do
        mkdir "ex$arg"
    done
fi
