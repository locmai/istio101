while true; do curl -s --header "end-user:locmai" http://localhost/ | grep version | grep --color -E 'v2|$';sleep 1;done
